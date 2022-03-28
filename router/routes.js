const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const userController = require('../controller/userController');
const { employeeAuth } = require("../middleware/employeeAuth");
const { jwtAuth } = require("../middleware/jwtAuth");
const employeeController = require('../controller/employeeController');

router.post('/create-user', userController.createUser);
router.get('/get-user', jwtAuth, userController.findUser);
router.put('/update-user', userController.updateUser);

route.post('/approve-user', employeeAuth, employeeController.updateUser);

module.exports = router;