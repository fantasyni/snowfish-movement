mod utils;

use std::collections::{BTreeMap, HashSet};
use std::str::FromStr;
use std::sync::Arc;
use crate::utils::set_panic_hook;
use serde::{Deserialize, Serialize};
use wasm_bindgen::{prelude::*, JsValue};
use move_binary_format::CompiledModule;
use move_binary_format::errors::{PartialVMResult};
use move_core_types::account_address::AccountAddress;
use move_core_types::identifier::{IdentStr, Identifier};
use move_core_types::{value::MoveTypeLayout};
use move_vm_runtime::{move_vm::MoveVM};
use move_vm_test_utils::{
    gas_schedule::{Gas, GasStatus},
    InMemoryStorage as MoveInMemoryStorage,
};
use move_bytecode_utils::Modules;
use move_core_types::language_storage::{ModuleId, StructTag, TypeTag};
use move_vm_types::{
    gas::GasMeter,
    loaded_data::runtime_types::{Type},
    values::{VMValueCast, Value},
};
use tsify_next::Tsify;
use move_vm_runtime::native_extensions::NativeContextExtensions;
use serde_wasm_bindgen::{to_value};
use aptos_aggregator::bounded_math::SignedU128;
use aptos_aggregator::resolver::{TAggregatorV1View, TDelayedFieldView};
use aptos_aggregator::types::{DelayedFieldValue, DelayedFieldsSpeculativeError, PanicOr};
use aptos_framework::natives::code::NativeCodeContext;
use aptos_framework::natives::cryptography::algebra::AlgebraContext;
use aptos_framework::natives::cryptography::ristretto255_point::NativeRistrettoPointContext;
use aptos_framework::natives::event::NativeEventContext;
use aptos_framework::natives::randomness::RandomnessContext;
use aptos_framework::natives::transaction_context::NativeTransactionContext;
use aptos_table_natives::{TableHandle, TableResolver};
use aptos_vm::natives;
use aptos_gas_schedule::{MiscGasParameters, NativeGasParameters, LATEST_GAS_FEATURE_VERSION};
use aptos_types::chain_id::ChainId;
use aptos_types::delayed_fields::PanicError;
use aptos_types::on_chain_config::{
     Features, TimedFeaturesBuilder,
};
use aptos_types::state_store::state_key::StateKey;
use aptos_types::state_store::state_value::{StateValue, StateValueMetadata};
use move_vm_runtime::module_traversal::{TraversalContext, TraversalStorage};
use move_vm_types::delayed_values::delayed_field_id::DelayedFieldID;
use bytes::Bytes;
use once_cell::sync::Lazy;
use aptos_framework::natives::aggregator_natives::NativeAggregatorContext;

#[wasm_bindgen]
pub struct SnowFish {
    storage: MoveInMemoryStorage,
    bytecode_modules: Vec<CompiledModule>,
    move_vm: Option<MoveVM>,
}

#[derive(Serialize, Deserialize, Tsify)]
// #[derive(Clone, Debug, Hash, Eq, PartialEq, Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub enum CallArgument {
    /// Passing raw bytes to the function. The bytes must follows the existing constraints for
    /// transaction arguments.
    Raw(Vec<u8>, String),
}


#[wasm_bindgen]
impl SnowFish {
    pub fn new_bytes(&self, bytes: Vec<u8>, type_tag: String) -> CallArgument {
        CallArgument::Raw(bytes, type_tag)
    }

    pub fn new_wasm() -> Self {
        Self {
            storage: MoveInMemoryStorage::new(),
            bytecode_modules: vec![],
            move_vm: None,
        }
    }

    pub fn refresh_vm(&mut self) -> Result<(), JsValue> {
        let natives = natives::aptos_natives(
            LATEST_GAS_FEATURE_VERSION,
            NativeGasParameters::zeros(),
            MiscGasParameters::zeros(),
            TimedFeaturesBuilder::enable_all().build(),
            Features::default(),
        );
        self.move_vm = Some(MoveVM::new(natives));

        Ok(())
    }

    pub fn publish_module(&mut self, binary: &[u8]) -> Result<(), JsValue> {
        let compiled_module = CompiledModule::deserialize(binary).unwrap();
        self.bytecode_modules.push(compiled_module);
        Ok(())
    }

    pub fn setup_storage(&mut self) -> Result<(), JsValue> {
        set_panic_hook();

        let modules = Modules::new(&self.bytecode_modules);
        for module in modules.iter_modules() {
            let module_id = module.self_id();
            let mut module_bytes = Vec::new();
            module.serialize_for_version(Option::from(module.version), &mut module_bytes);
            self.storage.publish_or_overwrite_module(module_id, module_bytes);
        }

        let natives = natives::aptos_natives(
            LATEST_GAS_FEATURE_VERSION,
            NativeGasParameters::zeros(),
            MiscGasParameters::zeros(),
            TimedFeaturesBuilder::enable_all().build(),
            Features::default(),
        );

        self.move_vm = Some(MoveVM::new(natives));

        Ok(())
    }

    pub fn call_return_bcs(
        &mut self,
        account_address: String,
        module: String,
        function: String,
        ty_args: Vec<String>,
        args: Vec<CallArgument>
    ) -> Result<Vec<CallArgument>, JsErr> {
        let module_id: ModuleId = ModuleId::new(AccountAddress::from_hex_literal(&*account_address).unwrap(), Identifier::new(module).unwrap());
        let cost_table = &move_vm_test_utils::gas_schedule::INITIAL_COST_SCHEDULE;

        let move_vm = self.move_vm.as_ref().unwrap();
        let mut session = move_vm.new_session_with_extensions(&self.storage, SnowFish::new_native_extensions());
        let mut gas_meter = GasStatus::new(&cost_table, Gas::new(10000000000));
        let mut args_bytes: Vec<Vec<u8>> = vec![];
        let mut type_args: Vec<Type> = vec![];

        let type_tag_args: Vec<TypeTag> = ty_args.iter()
            .map(|ty_arg| {
                TypeTag::from_str(ty_arg).unwrap()
            }).collect();

        for tag in type_tag_args.clone().into_iter() {
            type_args.push(session.load_type(&tag).unwrap())
        }

        for call in args.into_iter() {
            match call {
                CallArgument::Raw(b, _s) => {
                    args_bytes.push(b);
                }
            }
        }

        let traversal_storage = TraversalStorage::new();

        let serialized_return_values_results = session
            .execute_function_bypass_visibility(
                &module_id,
                IdentStr::new(&*function).unwrap(),
                type_tag_args.clone(),
                args_bytes,
                &mut gas_meter,
                &mut TraversalContext::new(&traversal_storage),
            )
            .map_err(|err| JsErr {
                display: format!("{}", err),
                message: err.to_string(),
            })?;

        let mut_loaded_function = session
            .load_function(
                &module_id,
                IdentStr::new(&*function).unwrap(),
                &type_tag_args,
            ).unwrap();

        let ty_builder = session.get_ty_builder();

        let arg_types = mut_loaded_function.ty_args()
            .into_iter()
            .map(|ty| ty_builder.create_ty_with_subst(ty, &type_args))
            .collect::<PartialVMResult<Vec<_>>>().unwrap();

        let mut_value_results: Vec<_> =
            serialized_return_values_results.mutable_reference_outputs.into_iter()
                .map(|(idx, value, _layout)| {
                    CallArgument::new_bytes(value, String::new())
                })
                .collect();

        let loaded_function = session
            .load_function(
                &module_id,
                IdentStr::new(&*function).unwrap(),
                &type_tag_args,
            ).unwrap();

        let mut value_results: Vec<_> =
            serialized_return_values_results.return_values.into_iter().zip(loaded_function.return_tys())
                .map(|((value, _layout), return_)| {
                    CallArgument::new_bytes(value, String::new())
                })
                .collect();

        for value_result in mut_value_results {
            value_results.push(value_result);
        }

        Ok(value_results)
    }
}

#[wasm_bindgen]
impl CallArgument {
    pub fn new_bytes(bytes: Vec<u8>, type_tag: String) -> Self {
        CallArgument::Raw(bytes, type_tag)
    }
}

pub struct AptosBlankStorage;

impl AptosBlankStorage {
    pub fn new() -> Self {
        Self {}
    }
}

impl TAggregatorV1View for AptosBlankStorage {
    type Identifier = StateKey;

    fn get_aggregator_v1_state_value(
        &self,
        _id: &Self::Identifier,
    ) -> PartialVMResult<Option<StateValue>> {
        Ok(None)
    }
}

impl TDelayedFieldView for AptosBlankStorage {
    type Identifier = DelayedFieldID;
    type ResourceGroupTag = StructTag;
    type ResourceKey = StateKey;

    fn get_delayed_field_value(
        &self,
        _id: &Self::Identifier,
    ) -> Result<DelayedFieldValue, PanicOr<DelayedFieldsSpeculativeError>> {
        unreachable!()
    }

    fn delayed_field_try_add_delta_outcome(
        &self,
        _id: &Self::Identifier,
        _base_delta: &SignedU128,
        _delta: &SignedU128,
        _max_value: u128,
    ) -> Result<bool, PanicOr<DelayedFieldsSpeculativeError>> {
        unreachable!()
    }

    fn generate_delayed_field_id(&self, _width: u32) -> Self::Identifier {
        unreachable!()
    }

    fn validate_delayed_field_id(&self, _id: &Self::Identifier) -> Result<(), PanicError> {
        unreachable!()
    }

    fn get_reads_needing_exchange(
        &self,
        _delayed_write_set_keys: &HashSet<Self::Identifier>,
        _skip: &HashSet<Self::ResourceKey>,
    ) -> Result<
        BTreeMap<Self::ResourceKey, (StateValueMetadata, u64, Arc<MoveTypeLayout>)>,
        PanicError,
    > {
        unreachable!()
    }

    fn get_group_reads_needing_exchange(
        &self,
        _delayed_write_set_keys: &HashSet<Self::Identifier>,
        _skip: &HashSet<Self::ResourceKey>,
    ) -> PartialVMResult<BTreeMap<Self::ResourceKey, (StateValueMetadata, u64)>> {
        unimplemented!()
    }
}

impl TableResolver for AptosBlankStorage {
    fn resolve_table_entry_bytes_with_layout(
        &self,
        _handle: &TableHandle,
        _key: &[u8],
        _layout: Option<&MoveTypeLayout>,
    ) -> PartialVMResult<Option<Bytes>> {
        Ok(None)
    }
}

#[allow(clippy::redundant_closure)]
static DUMMY_RESOLVER: Lazy<AptosBlankStorage> = Lazy::new(|| AptosBlankStorage::new());

impl SnowFish {
    pub fn new_native_extensions<'r>() -> NativeContextExtensions<'r>  {
        let mut exts = NativeContextExtensions::default();
        use aptos_framework::natives::object::NativeObjectContext;
        use aptos_table_natives::NativeTableContext;

        exts.add(NativeTableContext::new([0u8; 32], &*DUMMY_RESOLVER));
        exts.add(NativeCodeContext::default());
        exts.add(NativeTransactionContext::new(
            vec![1],
            vec![1],
            ChainId::test().id(),
            None,
        ));
        exts.add(NativeAggregatorContext::new(
            [0; 32],
            &*DUMMY_RESOLVER,
            false,
            &*DUMMY_RESOLVER,
        ));
        exts.add(NativeRistrettoPointContext::new());
        exts.add(AlgebraContext::new());
        exts.add(NativeEventContext::default());
        exts.add(NativeObjectContext::default());

        let mut randomness_ctx = RandomnessContext::new();
        randomness_ctx.mark_unbiasable();
        exts.add(randomness_ctx);

        exts
    }
}

#[derive(Serialize, Deserialize)]
/// Error type for better JS handling and generalization
/// of Rust / WASM -> JS error conversion.
pub struct JsErr {
    // type_: String,
    message: String,
    display: String,
}

impl Into<JsValue> for JsErr {
    fn into(self) -> JsValue {
        to_value(&self).unwrap()
    }
}

impl<T: std::error::Error> From<T> for JsErr {
    fn from(err: T) -> Self {
        JsErr {
            display: format!("{}", err),
            message: err.to_string(),
        }
    }
}