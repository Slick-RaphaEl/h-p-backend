const EmployeeModel = require("../model/EmployeeModel");

exports.employeeAuth = async (req, res, next) => {
    const employeeId = req.userId;
    await EmployeeModel.findOne({email: employeeId}, function(err, obj) {
        if(err) res.json('you are not an employee');
        else await next();
    });
}