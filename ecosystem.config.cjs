module.exports = {
  apps: [
    {
      name: 'univ-portfolio',
      script: './bin/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
};
