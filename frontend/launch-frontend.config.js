module.exports = {
  apps: [
    {
      name: 'lecture-eval-frontend',
      script: '/var/www/lecture-eval/frontend/start.sh',

      interpreter: '/bin/bash',

      autorestart: true,
      watch: false,
    },
  ],
};