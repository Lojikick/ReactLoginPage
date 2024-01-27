const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/backend',  // Adjust this path based on your API routes
    createProxyMiddleware({
      target: 'http://localhost:8000',  // Adjust the target to match your Flask server
      changeOrigin: true,
    })
  );
};