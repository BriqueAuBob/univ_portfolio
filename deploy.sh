git pull
node ace build
cd build
npm ci --omit=dev -max-old-space-size=1024
cp ../.env .
node ace migration:run --force
pm2 delete server
pm2 start server.js --name server