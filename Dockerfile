FROM node:16

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

# Build the TS to JS
RUN npm run build

COPY ./dist .

EXPOSE 3005
RUN npm run start
