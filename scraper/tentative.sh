docker run -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm install
docker run -d --env START=1 --env LIMITE=1000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=1001 --env LIMITE=2000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=2001 --env LIMITE=3000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=3001 --env LIMITE=4000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=4001 --env LIMITE=5000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=5001 --env LIMITE=6000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=6001 --env LIMITE=7000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=7001 --env LIMITE=8000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=8001 --env LIMITE=9000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=9001 --env LIMITE=10000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=10001 --env LIMITE=11000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=11001 --env LIMITE=12000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=12001 --env LIMITE=13000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=13001 --env LIMITE=14000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run -d --env START=14001 --env LIMITE=14347 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
# docker run -v "$PWD":/usr/src/app -w /usr/src/app node:12 node juntar.js
