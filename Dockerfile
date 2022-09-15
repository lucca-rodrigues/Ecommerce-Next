FROM node:16-slim

WORKDIR /app

COPY ./package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD  ["yarn", "dev"]