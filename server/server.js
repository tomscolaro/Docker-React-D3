const express = require('express');

// Constants
const PORT = 8000;
const HOST = '127.0.0.1';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

console.log('----------------------this is running-------------------')
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); 