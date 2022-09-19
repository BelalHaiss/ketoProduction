module.exports = {
  apps: [
    {
      name: 'keto',
      script: './src/server.js',
      NODE_ENV: 'production',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
        TZ: 'Africa/Accra',
        PORT: 80
      }
    }
  ]
};
