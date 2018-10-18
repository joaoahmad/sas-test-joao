FROM node:8.12

RUN npm i -g nodemon

ADD yarn.lock /yarn.lock
ADD package.json /app/package.json

WORKDIR /app

RUN yarn install

ADD ./ /app/

EXPOSE 8080

CMD ["yarn", "dev"]
