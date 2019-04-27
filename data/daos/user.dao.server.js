const userModel = require("../models/user.model.server");
// require('../db')();

populateDatabase = () =>
  userModel.collection.insertMany([
    {
      username: 'alice',
      password: 'alice',
      firstName: 'Alice',
      lastName: 'Wonderland',
      email: 'aliceW@gmail.com'
    },
    {
      username: 'bob',
      password: 'bob',
      firstName: 'Bob',
      lastName: 'Wood',
      email: 'bobW@gmail.com'
    }]);

findUserByCredentials = (username, password) =>
  userModel.collection.findOne({username: username, password: password});

createUser = (user) =>
  userModel.collection.insert(user);


// populateDatabase().then(res => console.log(res));
// findUserByCredentials('alice', 'alice').then(rs => console.log(rs));

module.exports = {
  populateDatabase,
  findUserByCredentials,
  createUser
}
