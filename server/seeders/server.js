// DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());

// CONTROLLERS
const ContactsController = require("../controllers/contacts_controller");
app.use("/api/contacts", ContactsController);

// LISTEN
app.listen(4005, () => {
  console.log("Server is running on port 4005");
});