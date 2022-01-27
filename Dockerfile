FROM node:16

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .
COPY tsconfig.json ./

# Build the TS to JS
RUN yarn build

WORKDIR /dist

EXPOSE 3005
RUN node src/app.js
