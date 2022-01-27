FROM node:16

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .

RUN npm install

COPY . .

# Build the TS to JS
RUN npm run build

WORKDIR /dist

EXPOSE 3005
CMD node index.js