FROM node:16

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

# Build the TS to JS
RUN npm run build

EXPOSE 3005
RUN node /dist/src/app.js
