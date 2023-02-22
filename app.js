const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');

const route = require("./routes/user.routes");
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const message =  "vikas";
  const sender = req.body.sender;
 
axios.post('https://wbhkapp.herokuapp.com/api/sendMessage', {
  "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
  "sender": 919354869926,
  "number": 7428322239,
  "message": "vikas pathak from msg webhookk"
})
  .then(response => {
    // console.log(response.data);
  })
  .catch(error => {
    // console.log(error);
  });

  res.sendStatus(200);

  
});



app.use('/api',route);
var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});