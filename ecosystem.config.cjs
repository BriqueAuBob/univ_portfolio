module.exports = {
  apps: [
    {
      name: 'univ-portfolio',
      script: './build/bin/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
};
