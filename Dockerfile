FROM node:16-alpine

ENV NODE_ENV development
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

RUN npm config set unsafe-perm true

COPY package*.json ./

COPY . ./

RUN npm install --silent

RUN chown -R node /app/node_modules/.prisma

USER node

CMD [ "npm", "start" ]
