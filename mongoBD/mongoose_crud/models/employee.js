const mongoose = require('mongoose');

//Declaring properties and datatypes
const employeeSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    age: { type: Number, required: true },
    status: { type: Boolean },
    hobbies: { type: [String] },
    salary: { type: Number }
})

//creating collection
module.exports = mongoose.model('employee', employeeSchema);