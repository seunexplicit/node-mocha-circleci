FROM node:latest

WORKDIR /src

COPY . .

RUN npm install

EXPOSE 3003

CMD ["npm", "run", "test"]