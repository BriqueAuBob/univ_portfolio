git checkout .
git pull
npm run build
cd build
npm ci --omit=dev
cp ../.env .
pm2 restart univ_portfolio
cd ../
sudo chmod 777 ./deploy.sh