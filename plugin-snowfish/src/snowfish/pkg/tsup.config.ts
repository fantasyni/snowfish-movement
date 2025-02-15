import { defineConfig } from 'tsup'
import { Plugin } from 'esbuild'
import { Buffer } from 'buffer'
import fs from 'fs'
import path from 'path'

export function wasmLoader():Plugin {
  return {
    name: 'wasm-loader',
    setup(build) {
      build.onLoad({ filter: /\.wasm$/ }, async (args) => {
        const wasmPath = path.resolve(args.path);
        const wasmBuffer = await fs.promises.readFile(wasmPath);
        const contents = `
          const wasm = [${new Uint8Array(wasmBuffer).toString()}];
          export default wasm;
        `;
        return {
          contents,
          loader: 'js',
        };
      });
    },
  };
}
export default defineConfig({
  entry: ['sui_wasm.js'],
  splitting: false,
  clean: true,
  dts: {
    entry: 'sui_wasm.js',
    resolve: true,
  },
  format: ['cjs', 'esm'],
  esbuildPlugins: [wasmLoader()],
  esbuildOptions(options, context) {
    if (context.format === 'cjs') {
      options.outdir = 'dist/cjs'
    } else if (context.format === 'esm') {
      options.outdir = 'dist/esm'
    }
  }
})