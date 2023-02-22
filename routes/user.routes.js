const express = require("express");
const router = express.Router();

const webhookcontroller=require('../controllers/webhook/user.controller')

router.post("/webhook" , webhookcontroller.sendMessage);

router.post("/sendMessage" , webhookcontroller.sendMessage);
module.exports = router;