var express = require("express");
var router = express.Router();
var logger = require("../utils/logger");

router.get("/healthcheck", logger, (req, res) => {
  res
    .json({
      status: 200,
      message: "Operational",
    })
    .status(200);
});

router.all("*", logger, (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
