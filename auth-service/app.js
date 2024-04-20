const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/auth", (req, res, next) => {
  return res.status(200).json({
    message: "Auth service up and running!",
  });
});

module.exports.handler = serverless(app);
