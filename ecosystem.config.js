module.exports = {
  apps : [
    {
      name      : 'app',
      script    : './bin/www',
      env: {
        SECRET: 'keyboard cat'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],
};
