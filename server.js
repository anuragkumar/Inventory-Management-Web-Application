const express = require('express');
const path = require('path');
const app = express();

require('./data/db')();

const session = require('express-session')
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'any string'
}));


app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Serve only the static files form the dist directory
app.use(express.static('./dist/assignment9'));

app.get('/*', function (req, res) {
  res.sendFile(path.join('./dist/assignment9/index.html'));
});

const userDao = require("./data/daos/user.dao.server");
//userDao.populateDatabase();

//login
app.post('/api/login', (req, res) => {
  console.log(req.body);
  userDao.findUserByCredentials(req.body.username, req.body.password).then(user => {
    if (user) {
      req.session['currentUser'] = user;
      res.send(user);
    }
    else {
      res.send(0);
    }
  });
});


app.listen(process.env.PORT || 8080);
