FROM node:16.10.0-alpine3.11

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
RUN apk -u add --no-cache bash curl

WORKDIR /usr/src/app

COPY tsconfig.json .
COPY tsconfig.build.json .

COPY package.json .

RUN npm i --legacy-peer-deps
COPY dist .

CMD ["node", "/usr/src/app/main.js"]
