/* eslint-disable */
const { rollup, watch } = require('rollup');
const chalk = require('chalk');
const ip = require('ip');

const { resolve: resolvePath, join: joinPath } = require('path');
const copy = require('rollup-plugin-copy');
const { folders, createRollupConfig } = require('./utils/createRollupConfig');
const serve = require('rollup-plugin-serve');
const liveReload = require('rollup-plugin-livereload');
const eslint = require('rollup-plugin-eslint');

const IP_ADDRESS = ip.address();
const CLEAR_OUTPUT = '\x1Bc';

const files = {
  src_tweets_data: resolvePath(folders.src, 'tweets.json'),
  build_tweets_data: joinPath(folders.build, 'tweets.json'),
};

const { output, ...config } = createRollupConfig({
  output: {
    entryFileNames: 'main.js',
  },
  plugins: [
    eslint.eslint(),
    serve({
      contentBase: folders.build,
      historyApiFallback: true,
      host: ['127.0.0.1', IP_ADDRESS],
      port: 3000,
    }),
    liveReload({
      watch: folders.build,
      delay: 500,
    }),
    copy({
      targets: {
        [files.src_tweets_data]: [files.build_tweets_data],
      }
    })
  ],
});

// Tell we're starting
console.log(chalk`${CLEAR_OUTPUT}{black.bgMagenta Starting development server...}`);

// Prevent rollup plugins from outputting directly
const consoleBackup = global.console;
global.console = {
  log() { }, // do nothing
  warn() { }, // do nothing
  error: consoleBackup.error,
};

rollup(config)
  .then((bundle) => bundle.write(output))
  .then(() => watch({ ...config, output }))
  .finally(() => {
    // Restore console binding
    global.console = consoleBackup;
    console.log(chalk`${CLEAR_OUTPUT}{green.bold We're up and running! 🚀}\n\n{blue Listening on} {black.bgBlue http://localhost:3000}\nAlso on your local network at {underline http://${IP_ADDRESS}:3000}\n`);
  })
  .catch((error) => console.error(error));
