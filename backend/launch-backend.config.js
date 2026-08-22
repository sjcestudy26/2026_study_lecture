module.exports = {
  apps: [
    {
      name: 'lecture-eval-backend',

      script: '/var/www/lecture-eval/backend/dist/main.js',

      cwd: '/var/www/lecture-eval/backend',

      interpreter: '/usr/bin/node',

      env: {
        NODE_ENV: 'production',
      },

      autorestart: true,
      watch: false,
    },
  ],
};