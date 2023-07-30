const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
  // Serve the index.html file
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('q4.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    const message = data.toString(); // Convert WebSocket data to string
    console.log('Received message:', message);
    const response = reply(message);
    socket.send(response);
  });

  socket.on('close', () => {
    console.log('A user disconnected');
  });
});

function reply(message) {
  // Chatbot logic
  this.Bot_Age = 23;
  this.Bot_Name = 'Devanshi';
  this.Bot_University = 'VNSGU';
  this.Bot_Country = 'India';

  message = message.toLowerCase();

  if (
    message.indexOf('hi') > -1 ||
    message.indexOf('hello') > -1 ||
    message.indexOf('welcome') > -1
  ) {
    return 'Hi!';
  } else if (message.indexOf('age') > -1 && message.indexOf('your')) {
    return "I'm " + this.Bot_Age;
  } else if (
    message.indexOf('how') > -1 &&
    message.indexOf('are') &&
    message.indexOf('you')
  ) {
    return "I'm fine ^_^";
  } else if (
    message.indexOf('where') > -1 &&
    message.indexOf('live') &&
    message.indexOf('you')
  ) {
    return 'I live in ' + this.Bot_Country;
  }
  return "Sorry, I didn't get it :( ";
}

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
