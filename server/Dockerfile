FROM node:alpine

WORKDIR /server

COPY package.json /server

RUN yarn install

COPY . /server

CMD ["yarn", "run", "start"]