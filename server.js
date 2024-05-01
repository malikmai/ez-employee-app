const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const methodOverride = require("method-override");
const JokeBook = require("./models/Employee.js");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect(process.env.MONGODB_URI);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// app.use(morgan('dev'));
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(3077, () => {
    console.log('Server running on port 3077');
});