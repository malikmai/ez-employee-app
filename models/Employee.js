const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    salary: { type: Number, required: true, min: 0 },
  },
);

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
