FROM node:latest

WORKDIR /src/fibonacci

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "test"]