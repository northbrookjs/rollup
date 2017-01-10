import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buba from 'rollup-plugin-buba'

export default {
  entry: 'src/index.js',
  dest: 'dist/northbrook-rollup.js',
  format: 'cjs',
  plugins: [
    buba(),
    resolve({ module: false, jsnext: false }),
    commonjs({
      include: [
        'node_modules/northbrook/**/*.js',
        'node_modules/ramda/**/*.js'
      ],
      namedExports: {
        'northbrook': ['command', 'alias', 'description', 'each'],
        'northbrook/helpers': ['execute', 'isFile'],
        'ramda': ['reduce', 'union', 'is', 'mergeWith', 'forEach', 'ifElse']
      }
    })
  ]
}
