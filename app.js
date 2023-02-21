const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');
const fs = require('fs'); 
console.log("vikas")
app.use(bodyParser.json());

// handle incoming WhatsApp messages
app.post('/webhook', (req, res) => {
  const message = req.body.message;
  const sender = req.body.sender;
console.log("vikas")
  // do something with the incoming message and sender information
  console.log(`Received WhatsApp message from ${sender}: ${message}`);

 const  data1="${sender}: ${message}";

  const data = "sfdgdgfgfgfd"; 
  fs.writeFileSync('https://wbhkapp.herokuapp.com/log.text', data); 

  res.sendStatus(200);

  
});




var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});