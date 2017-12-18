# Using Docker for dB, API, and front-end: How-To
Following [this](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd) tutorial.

## Basic setup
- Install Docker, MongoDB, npm
- Make a new directory
```
mkdir sfapi
```
- Initialise project
```
npm init -y
```
- Install dependencies
```
npm install express nodemon body-parser mongoose --save
```
- Create `server.js`. Boilerplate code:
```javascript
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('RESTful API server started on: ' + port);
```
- Create `api/routes`, `api/models`, `api/controllers`.
- Create dB scheme in `api/models/userModel.js`.
- Create request routes in `api/routes/userRoutes.js`.
- Create controllers (how to handle routes) in `api/controllers/userController.js`.
- Register routes in `server.js`.
- Check it works with local MongoDB instance with `mongod` and `npm run start`.
- Check API routes in Postman.

## Dockerising the API and DB
- Create `Dockerfile` which contains instructions for Docker on how to run your app:
```Docker
FROM node:carbon
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8080
CMD ["npm", "start"]
```
- Create `docker-compose.yml` to launch the API and a MongoDB instance in two separate containers:
