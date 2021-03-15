FROM node:latest

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "run", "test"]