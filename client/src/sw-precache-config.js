module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  runtimeCaching: [{
    'urlPattern': '/(auth|admin)/(.*)',
    'handler': 'networkFirst'
  }],
  swFilePath: 'build/service-worker.js'
};
