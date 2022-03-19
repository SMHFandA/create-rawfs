FROM node:14-alpine

ENV NODE_ENV development
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "npm", "start" ]
