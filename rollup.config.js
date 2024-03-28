// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
// import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';

const packageJson = require('./package.json');

const external = [...Object.keys(packageJson.peerDependencies || {})];
console.log(external);

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      // dir: 'lib/cjs',
      format: 'cjs',
      sourcemap: true,
      // preserveModules: true,
    },
    {
      file: packageJson.module,
      // dir: 'lib/esm',
      format: 'esm',
      sourcemap: true,
      // preserveModules: true,
    },
  ],
  plugins: [
    del({ targets: ['lib/*'] }),
    // peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    // postcss({
    //   extensions: ['.scss'],
    // }),
  ],
  external,
};
