module.exports = function () {
  const mongoose = require('mongoose');
  const databaseName = 'web-inventory';
  var connectionString = "mongodb://heroku_jssv03pz:lkbevsfnhsuhlll1euto665j9q@ds149056.mlab.com:49056/heroku_jssv03pz";
  connectionString += databaseName;
  mongoose.connect(connectionString);
  console.log('connected');
};
