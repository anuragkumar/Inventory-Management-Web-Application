const express = require('express');
const path = require('path');
const app = express();

require('./data/db')();

let loggedInUser;
let x = 0;

const session = require('express-session');

app.use(session({
  name: 'server-session-cookie-id',
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

const userDao = require("./data/daos/user.dao.server");

if (x === 0) {
  userDao.populateDatabase();
  x = x + 1;
}

//login
app.post('/api/login', (req, res) => {
  console.log(req.body);
  userDao.findUserByCredentials(req.body.username, req.body.password).then(user => {
    if (user) {
      // req.session['currentUser'] = user;
      loggedInUser = user;
      // console.log('login ' + req.session['currentUser'].username);
      res.send(user);
    } else {
      res.send(0);
    }
  });
});

app.get('/api/logout', (req, res) => {
  console.log("inside server logout");
  req.session.destroy();
  res.sendStatus(200);
});

app.post('/api/register', (req, res) => {
  console.log(req.body);
  userDao.createUser(req.body).then(user => {
    if (req.session['currentUser']) {
      req.session.destroy();
      req.session['currentUser'] = user;
      res.send(user);
    }
  })
});

app.get('/api/profile', (req, res) => {
  console.log('profile');
  console.log(loggedInUser);
  if (!loggedInUser) {
    res.sendStatus(403);
  }
  else {
    res.send(loggedInUser);
  }
});

app.post('/api/update', (req, res) => {
  user = req.session['currentUser'];
  updateUser = req.body;
  console.log(user._id);
  res.send("Done");
});

app.get('*', function (req, res) {
  res.sendFile('./dist/assignment9/index.html', { root: __dirname });
});

app.listen(process.env.PORT || 8080);
