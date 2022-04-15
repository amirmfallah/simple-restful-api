const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

var routes = require("./routes/index");
app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Simple Restfull API listening on port ${port}`);
});
