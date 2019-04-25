module.exports = function () {
  const mongoose = require('mongoose');
  const databaseName = 'webdev-inventory';
  var connectionString = 'mongodb://localhost/';
  connectionString += databaseName;
  mongoose.connect(connectionString);
  console.log('connected');
};
