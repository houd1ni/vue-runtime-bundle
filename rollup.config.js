import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'

const all = process.env.ALL == 'yes'
const fela = process.env.FELA == 'yes'

export default {
  input: all
    ? 'src/main.all.ts'
    : ( fela ? 'src/main.fela.ts' : 'src/main.lit.ts'),
  output: {
    file: `dist/${all ? 'all' : (fela ? 'fela' : 'lit')}.js`,
    format: 'cjs',
    name: 'vue-runtime-bundle',
  },
  sourcemap: process.env.NODE_ENV == 'development',
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: require("typescript"),
      tsconfig: "./tsconfig.json",
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: false,
          inlineSourceMap: process.env.NODE_ENV == 'development'
        }
      }
    }),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}