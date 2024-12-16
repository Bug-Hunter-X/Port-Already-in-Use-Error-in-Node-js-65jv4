const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;
let currentPort = port; 

function startServer() {
  server.listen(currentPort, () => {
    console.log(`Server is running on port ${currentPort}`);
  });
}

function handleError(err) {
  if (err.code === 'EADDRINUSE') {
    currentPort++;
    console.log(`Port ${currentPort -1} is in use, trying port ${currentPort}`);
    startServer();
  } else {
    console.error('Error starting server:', err);
  }
}

startServer();
server.on('error', handleError);
