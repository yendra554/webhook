const express = require("express");
const router = express.Router();

const webhookcontroller=require('../controllers/webhook/user.controller')
const userController=require('../controllers/user.controller')
router.post("/webhook" , webhookcontroller.sendMessage);

router.post("/sendMessage" , webhookcontroller.sendMessage);
router.get("/getAllusers/" , userController.getAllUsers);
router.post("/signup/", userController.signup);
router.post("/updateUser/", userController.updateUser);
 router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;