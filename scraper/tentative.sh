docker run -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm install
docker run --env START=1 --env LIMITE=1000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run --env START=1001 --env LIMITE=2000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run --env START=2001 --env LIMITE=3000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run --env START=3001 --env LIMITE=4000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run --env START=4001 --env LIMITE=5000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run --env START=5001 --env LIMITE=6000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start
docker run --env START=6001 --env LIMITE=7000 -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm start