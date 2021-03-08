FROM node:latest

WORKDIR /src

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "test"]