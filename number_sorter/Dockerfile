FROM node:latest

WORKDIR /src

COPY . .

RUN npm install

EXPOSE 3002

CMD ["npm", "run", "test"]