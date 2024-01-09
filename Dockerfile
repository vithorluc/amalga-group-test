FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pnpm && pnpm install

RUN npm install -g @nestjs/cli

COPY . .

CMD ["pnpm", "run", "start:dev"]