seajs.config({
  // Enable plugins
  plugins: ['shim','nocache'],
  base: 'http://localhost/beidanci/js',
  // Configure alias
  alias: {
    'jquery': {
      src: 'vendor/jquery/1.9.1/jquery-1.9.1.min.js',
      exports: 'jQuery'
    }
  },
  charset: 'utf-8'
});
