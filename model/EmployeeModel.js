const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const scheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String
    }
});

const EmployeeModel = mongoose.model('employee', scheme);
module.exports = EmployeeModel;

