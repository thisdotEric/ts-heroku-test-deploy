FROM node:16

WORKDIR /usr/app

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

# Build the TS to JS
RUN npm run build

WORKDIR /dist

EXPOSE 3005
CMD node index.js