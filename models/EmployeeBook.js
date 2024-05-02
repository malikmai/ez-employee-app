const mongoose = require("mongoose");

const employeeBookSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String, required: true },
  department: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  salary: { type: Number, required: true, min: 0 },
});

const EmployeeBook = mongoose.model("EmployeeBook", employeeBookSchema);
module.exports = EmployeeBook;
