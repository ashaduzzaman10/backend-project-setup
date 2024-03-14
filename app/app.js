require("dotenv").config("../.env");
const express = require("express");
const middleware = require("./middleware");
const router = require("./routes");
const { notFoundHandler, ErrorHandler } = require("./error");
const app = express();

// global app middleware

app.use(middleware);
app.use(router);

// global error handler
app.use(notFoundHandler);
app.use(ErrorHandler);

module.exports = app;
