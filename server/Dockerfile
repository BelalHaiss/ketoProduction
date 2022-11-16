FROM node:lts-alpine

WORKDIR /app

RUN npm install pm2 -g

COPY package*.json ./

RUN npm install npm install --omit=dev

# ENV NODE_ENV=production

COPY . .

USER node

CMD [ "pm2-runtime","ecosystem.config.js" ]

