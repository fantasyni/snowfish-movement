# snowfish-agent

The **snowfish agent** is a smart contract development AI Agent for move developers base on Eliza OS and Movement Blockchain.  
It provides the following crucial features for move developers: 
* move module analysis
* move typescript test framework
* move security scan tool

## Tech Stack
* move vm execution runtime with wasm
* autonomous AI agents with eliza

[demo video](https://www.youtube.com/watch?v=8piD1VG6Zf0)
[google slide](https://docs.google.com/presentation/d/1bT2NtH3R2bFS3sQ5EJFDCPyrmsMOIxcptzQNGmEiMZE/edit?usp=sharing)

## Actions

## move module analysis

### get_modules

get move modules.

```typescript
// Example usage
const result = await runtime.executeAction("GET_MODULES");
```

### get_functions

get functions declared in move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_FUNCTIONS", {
    module: "modulename"
});
```

### get_structs

get structs declared in move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_STRUCTS", {
    module: "modulename"
});
```

### get_dependencies

get dependencies modules for move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_DEPENDENCIES", {
    module: "modulename"
});
```

### get_friends

get friends modules declared in this move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_FRIENDS", {
    module: "modulename"
});
```

### get_objects

get objects structs(struct with key ability) for move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_OBJECTS", {
    module: "modulename"
});
```

### get_entry_functions

get entry functions decalred in move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_ENTRY_FUNCTIONS", {
    module: "modulename"
});
```

### get_private_functions

get private functions decalred in move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_PRIVATE_FUNCTIONS", {
    module: "modulename"
});
```

### get_friend_functions

get friend functions decalred in move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_FRIEND_FUNCTIONS", {
    module: "modulename"
});
```

### get_public_functions

get public functions decalred in move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_PUBLIC_FUNCTIONS", {
    module: "modulename"
});
```

### get_phantom_structs

get structs with phantom type decalred in move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_PHANTOM_FUNCTIONS", {
    module: "modulename"
});
```

### move_signature

get disassembled code signature for move module

```typescript
// Example usage
const result = await runtime.executeAction("MOVE_SIGNATURE", {
    module: "modulename"
});
```

### move_disassemble

get move disassembled code for move module

```typescript
// Example usage
const result = await runtime.executeAction("MOVE_DISASSEMBLE", {
    module: "modulename"
});
```

### get_function_signature

get the function signature for the move function in the move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_FUNCTION_SIGNATURE", {
    module: "modulename",
    function_name: "set_foo"
});
```

### get_struct_definition

get move struct definition for the Foo struct in the move module

```typescript
// Example usage
const result = await runtime.executeAction("GET_MOVE_STRUCT_DEFINITION", {
    module: "modulename",
    struct_name: "foo"
});
```

## move typescript test framework

### gen_move_test_scripts

generate move typescript test scripts
* run tests with typescript in move wasm runtime
* auto generation typescript class with bcs interface

```typescript
// Example usage
const result = await runtime.executeAction("GEN_MOVE_TEST_SCRIPTS");
```

## move security scan tool

### security scan module

run security scan for move module 

```typescript
// Example usage
const result = await runtime.executeAction("SECURITY_SCAN", {
    module: "modulename"
});
```

### unused_private_functions

security scan unsed private functions for move module 

```typescript
// Example usage
const result = await runtime.executeAction("UNUSED_PRIVATE_FUNCTIONS", {
    module: "modulename"
});
```

### unused_constant

security scan unsed constant for move module 

```typescript
// Example usage
const result = await runtime.executeAction("UNUSED_CONSTANT", {
    module: "modulename"
});
```

### unchecked_return

security scan unchecked return function calls for move module

```typescript
// Example usage
const result = await runtime.executeAction("UNCHECKED_RETURN", {
    module: "modulename"
});
```