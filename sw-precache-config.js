module.exports = {
  staticFileGlobs: [
    'manifest.json',
    'src/**/*',
    '/images/**/*.*',
    '/assets/**/*.*',
  ],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest',
    },
  ],
};
