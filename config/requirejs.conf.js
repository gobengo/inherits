require.config({
  paths: {
    inherits: 'inherits',
    sinon: 'lib/sinonjs/sinon',
    chai: 'node_modules/chai/chai',
    debug: 'lib/debug/debug'
  },
  shim: {
    'sinon': {
      exports: 'sinon'
    }
  }
});
