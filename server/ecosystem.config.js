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
        PORT: 80,
        BASE_URL: 'https://www.ketonestyle.com/',
        AP_ID: 'APP_ID_1668101711541',
        SECRET_KEY: '32a58d9e-dcb0-3d49-b23b-8d2254aa69b8',
        PAY_LINK_URL: 'https://restapi.paylink.sa'
      }
    }
  ]
};
