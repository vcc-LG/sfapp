FROM node:latest

RUN mkdir -p /usr/src/app
ADD . /usr/src/app

WORKDIR /usr/src/app
RUN npm install

RUN npm build

EXPOSE 5000

# Start the app
CMD npm start
