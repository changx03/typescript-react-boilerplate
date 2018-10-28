const express = require('express');
const path = require('path');
const app = express();

// set static public path
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/app.html'));
});

const port = process.env.PORT || 8081;
app.listen(port, function() {
  console.log('listening to http://localhost:' + port);
});
