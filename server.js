const express = require("express");
var cors = require("cors");
var routes = require("./routes/index");

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(routes);

  return app;
};
