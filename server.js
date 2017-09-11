

const http = require('http');
const bodyParser = require("body-parser");
const path = require("path");
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/htmlroutes.js")(app);

var messagetosend;
var messageto;

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('Got your message, we will respond when we can! jandmtravels.com');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});


http.createServer(app).listen(port, () => {
  console.log('Express server listening on port '+port);
});

messagetosend='This is a test message to Jonathan from the travel side SMS account. Whats Up';
messageto='+14159808016';

// function sendmessage(messagetosend) {

// client.messages
// .create({
//   to: messageto,
//   from: '+14159808016',
//   body: messagetosend,
// })
// .then((message) => console.log(message.sid));
// };
