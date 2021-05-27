const express = require('express');
const routes = express.Router();
const views = __dirname + "/views/"; //essa variavel ta aki pq views ta denrtro de src e o express não acha ele fora
const profile = {
  name: "Cleisson",
  avatar: "https://avatars.githubusercontent.com/u/83767005?v=4",
  "monthly-budget": 3500,
  "days-per-week": 7,
  "hours-per-day": 7,
  "vacation-per-year": 4
}

//request, response
routes.get('/', (request, response) => response.render(views + "index"));
routes.get('/job', (request, response) => response.render(views + "job"));
routes.get('/job-edit', (request, response) => response.render(views + "job-edit"));
routes.get('/profile', (request, response) => response.render(views + "profile", {profile: profile}));


module.exports = routes;