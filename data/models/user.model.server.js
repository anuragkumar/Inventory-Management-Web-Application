const mongoose = require("mongoose");
const userSchema = require("../schemas/user.schema.server");
module.exports = mongoose.model('UserModel', userSchema);
