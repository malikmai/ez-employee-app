const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const EmployeeBook = require("./models/EmployeeBook.js");

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// app.use(morgan('dev'));
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/employees", async (req, res) => {
  try {
    const allEmployees = await EmployeeBook.find({});
    res.render("index", { employee: allEmployees });
  } catch (error) {
    console.error("Failed to retrieve employee:", error);
    res.status(500).send("Error retrieving employee");
  }
});
app.get("/employees/new", (req, res) => {
  res.render("employees/new");
});

app.post("/employees/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const { firstName, lastName, title, department, email, phone, salary } =
    req.body;
  try {
    await EmployeeBook.findByIdAndUpdate(employeeId, {
      firstName,
      lastName,
      title,
      department,
      email,
      phone,
      salary,
    });
    res.redirect("/employees/" + employeeId);
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).send("Error updating employee");
  }
});

// Route to handle the Edit/Update (PUT) operations
app.get("/employees/:employeeId/edit", async (req, res) => {
  try {
    const foundEmployee = await EmployeeBook.findById(req.params.employeeId);
    if (!foundEmployee) {
      console.log("Error finding employee:", error);
      return res.status(404).send("Error finding employee");
    }
    res.render("employees/edit.ejs", { employee: foundEmployee });
  } catch (error) {
    console.error("Error finding employee:", error);
    res.status(500).send("Error finding employee");
  }
});
// Route to handle creating a new employee
app.post("/employees", async (req, res) => {
  const { firstName, lastName, title, department, email, phone, salary } =
    req.body;
  try {
    const newEmployee = new EmployeeBook({
      firstName,
      lastName,
      title,
      department,
      email,
      phone,
      salary,
    });
    await newEmployee.save();
    res.redirect("/employees");
  } catch (error) {
    console.error("Error creating new employee:", error);
    res.status(500).send("Failed to create new employee");
  }
});

// Route to hand the deletion operations
app.get("/employees/:employeeId/delete", async (req, res) => {
  try {
    const foundEmployee = await EmployeeBook.findById(req.params.employeeId);
    if (!foundEmployee) {
      return res.status(404).send("Employee not found.");
    }
    res.render("employees/delete", { employee: foundEmployee });
  } catch (error) {
    console.error("Error finding employee for deletion:", error);
    res.status(500).send("Error retrieving employee details.");
  }
});
app.delete("/employees/:employeeId", async (req, res) => {
  try {
    await EmployeeBook.findByIdAndRemove(req.params.employeeId);
    res.redirect("/employees");
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).send("Failed to delete employee.");
  }
});

app.listen(3077, () => {
  console.log("Server running on port 3077");
});
