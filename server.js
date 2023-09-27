const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/default.config.js");
const todoRoutes = require("./src/routes/todo.routes.js");

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", function (err) {
  console.log(`Could not connect to the database: ${err}`);
  process.exit();
});
mongoose.connection.once("open", function () {
  console.log("Successfully connected to the database");
});

// Todo Routes
app.use("/api/todos", todoRoutes);

// listen for requests
const PORT = config.port;
app.listen(PORT, function () {
  console.log("Server is listening on port 3000");
});
