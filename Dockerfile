FROM node:16.8.0-alpine3.11

RUN npm install -g npm@7.22.0
# RUN addgroup some_group && adduser -S -G some_group some_user
# USER some_user

WORKDIR /dockerized_app
COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "run", "dev"]