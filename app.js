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
  const message = "vikas";
  const sender = req.body.sender;
  // const message = req.body.message;
  // const sender = req.body.sender;
console.log("vikas")
  // do something with the incoming message and sender information
  console.log(`Received WhatsApp message from ${sender}: ${message}`);

//  const  data1="${sender}: ${message}";

//   const data = "sfdgdgfgfgfd"; 
//   fs.writeFileSync('log.text', data); 



// axios.post('https://watzapi.in/send-message', {
//     "sender": 917428322239,
//   "number": 917390982029,
//   "message": "Hi there"
// })

axios.post('https://watzapi.in/send-message', {
  "api_key":'2dv2PJ4X196rOeHM7sWN2CKFf3uy1I',
  "sender": 919354869926,
  "number": 917428322239,
  "message": "Hi there1234"
},

)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  res.sendStatus(200);

  
});

// start the server
// app.listen(3000, () => {
//   console.log('WhatsApp webhook server listening on port 3000');
// });


var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});