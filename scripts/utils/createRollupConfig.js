const { resolve: resolvePath, join: joinPath } = require('path');

const copy = require('rollup-plugin-copy');
const commonJs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const progress = require('rollup-plugin-progress');
const replace = require('rollup-plugin-replace');
const del = require('rollup-plugin-delete');

const folders = {
  build: resolvePath('.', 'build'),
  build_assets: resolvePath('.', 'build', 'assets'),
  src: resolvePath('.', 'src'),
  src_assets: resolvePath('.', 'assets'),
};

const files = {
  main: joinPath(folders.src, 'index.js'),
  src_index: resolvePath('.', 'index.html'),
  src_manifest: resolvePath('.', 'manifest.json'),
  build_index: joinPath(folders.build, 'index.html'),
  build_manifest: resolvePath(folders.build, 'manifest.json'),
  src_noSoport: joinPath(folders.src, 'no-support.html'),
  build_noSoport: joinPath(folders.build, 'no-support.html'),
};

const createRollupConfig = ({
  input,
  output = {},
  plugins = [],
  config = {},
} = {}) => ({
  input: input ? input : files.main,
  output: {
    dir: folders.build,
    entryFileNames: '[name]-[hash].js',
    chunkFileNames: '[name]-[hash].js',
    sourcemap: true,
    format: 'esm',
    ...output,
  },
  plugins: [
    del({
      targets: `${folders.build}/*`,
    }),
    commonJs(),
    resolve(),
    progress(),
    copy({
      targets: {
        [folders.src_assets]: [folders.build_assets],
        [files.src_index]: [files.build_index],
        [files.src_manifest]: [files.build_manifest],
        [files.src_noSoport]: [files.build_noSoport],
      },
    }),
    replace({
      exclude: 'node_modules/**',
      values: {
        'import(': 'dimport(',
        delimiters: ['', ''],
      },
    }),
    ...plugins,
  ],
  context: 'window',
  onwarn(warning, warn) {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  },
  ...config,
});

module.exports = {
  folders,
  files,
  createRollupConfig,
};
