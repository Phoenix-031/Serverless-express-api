const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/user", (req, res, next) => {
  return res.status(200).json({
    message: "user service up and running",
  });
});

module.exports.handler = serverless(app);
