var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC2ed879ce9d3f958a2a2659d9e99d29df', '0f21da53b70a14ede0de75db399b69b6');

// Send the text message.
client.messages.create({
  to: '+21653406288',
  from: '+19705483272',
//   from: 'test',
  body: 'hello this is new sms app testing'
});