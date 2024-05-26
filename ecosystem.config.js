module.exports = {
  apps: [
    {
      name: 'univ-portfolio',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
};
