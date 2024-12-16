# Node.js Port Already in Use Error

This repository demonstrates a common error in Node.js applications: the 'port already in use' error.  This occurs when you attempt to start a server on a port that is already being used by another process.

## Bug

The `bug.js` file contains a simple HTTP server that listens on port 8080. If port 8080 is already in use (e.g., by another Node.js app or a different service), the server will fail to start and throw an error.

## Solution

The `bugSolution.js` file provides a solution to handle this error gracefully. It attempts to start the server on the specified port and includes error handling to detect and manage the 'port already in use' scenario, suggesting alternative ports.