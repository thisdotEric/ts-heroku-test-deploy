FROM node:16

ADD package.json ./app/package.json
ADD tsconfig.json ./app/tsconfig.json
ADD package-lock.json ./app/package-lock.json

WORKDIR /app

RUN npm install

ADD . ./app

# Build the TS to JS
RUN npm run build

WORKDIR /app/dist

EXPOSE 3005
RUN node /src/app.js
