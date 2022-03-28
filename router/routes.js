const express = require("express");
const router = express.Router();

const userController = require('../controller/userController');
const { jwtAuth } = require("../middleware/jwtAuth");

router.post('/create-user', userController.createUser);
router.get('/get-user', jwtAuth, userController.findUser);
router.put('/update-user', userController.updateUser);

module.exports = router;