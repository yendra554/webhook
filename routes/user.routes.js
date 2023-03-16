const express = require("express");
const router = express.Router();

const webhookcontroller=require('../controllers/webhook/user.controller')
const userController=require('../controllers/user.controller')

const userService=require("../controllers/userService.controller")
router.post("/webhook" , webhookcontroller.sendMessage);

router.post("/sendMessage" , webhookcontroller.sendMessage);
router.get("/getAllusers/" , userController.getAllUsers);
router.post("/getAllMenu/" , userController.getAllMenu);
router.post("/signup/", userController.signup);
router.post("/encrypt/", userController.encrypt);

router.post("/updateUser/", userController.updateUser);
 router.post("/createMenu" , userService.createMenu);
 router.get("/getMenu/:id" , userService.getMenu);
 router.post("/addService" , userService.addService);
 router.get("/getServices/" , userService.getServices);
 router.delete("/deleteMenu/:id" , userService.deleteMenu);
 router.get("/getServicesByMenu/:id" , userService.getServicesByMenu);
module.exports = router;