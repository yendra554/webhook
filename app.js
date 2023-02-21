// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// // parse incoming JSON data
// console.log("vikas")
// app.use(bodyParser.json());

// // handle incoming WhatsApp messages
// app.post('/webhook', (req, res) => {
//   const message = req.body.message;
//   const sender = req.body.sender;
// console.log("vikas")
//   // do something with the incoming message and sender information
//   console.log(`Received WhatsApp message from ${sender}: ${message}`);

//   // send a response to the WhatsApp API
//   res.sendStatus(200);
// });

// // start the server
// app.listen(3000, () => {
//   console.log('WhatsApp webhook server listening on port 3000');
// });
const express = require("express");
require('dotenv').config();
require("./connection/connection");
const route = require("./routes/user.routes");
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
// app.use('/', express.static(path.join(__dirname, 'public/frontend')));
app.use('/api',route);
app.use(express.json());
var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
});
