FROM node:16.14-alpine

WORKDIR /front-end

EXPOSE 3000

COPY . .

RUN npm install

CMD ["npm", "start"]