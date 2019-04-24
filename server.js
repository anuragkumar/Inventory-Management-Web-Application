const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/assignment9'));

app.get('/*', function (req, res) {
  res.sendFile(path.join('./dist/assignment9/index.html'));
});

app.listen(8080, 'localhost');
