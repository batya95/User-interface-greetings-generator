const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/prompts',
    createProxyMiddleware({
      target: 'http://localhost:8989',
      changeOrigin: true,
    })
  );
};
