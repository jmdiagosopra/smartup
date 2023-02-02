/* eslint-disable no-console */

// Get initial time
const startTime = new Date();

const { rollup } = require('rollup');
const chalk = require('chalk');

const { folders, createRollupConfig } = require('./utils/createRollupConfig');
const { optimizeImgs } = require('./utils/optimizeImgs');

const { terser } = require('rollup-plugin-terser');

const CLEAR_OUTPUT = '\x1Bc';

const { output, ...config } = createRollupConfig({
  output: {
    entryFileNames: 'main.js',
  },
  plugins: [
    terser({
      module: true,
      safari10: true,
    }),
  ],
  config: {
    treeshake: true,
  },
});

// Tell we're starting
console.log(chalk`${CLEAR_OUTPUT}{black.bgMagenta Starting build...}`);

// Prevent rollup plugins from outputting directly
const consoleBackup = global.console;
global.console = {
  log() { }, // do nothing
  warn() { }, // do nothing
  error: consoleBackup.error,
};

rollup(config)
  .then((bundle) => bundle.write(output))
  .then(() => optimizeImgs({
    input: folders.build_assets,
    output: folders.build_assets,
  }))
  .then(() => {
    // Restore console binding
    global.console = consoleBackup;
    const time = (((new Date()) - startTime) / 1000).toFixed(2);
    console.log(chalk`${CLEAR_OUTPUT}\n{green.bold Yass! Done in ${time}s 🎉}\n{blue Tip: you can serve the build running} {black.bgBlue npm run serve:build}`);
  })
  .catch((error) => console.error(error));
