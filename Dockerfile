FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm run install

COPY . .
COPY tsconfig.json ./

# Build the TS to JS
RUN npm run build

WORKDIR /dist

EXPOSE 3005
RUN node src/app.js
