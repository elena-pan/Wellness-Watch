const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  expires: { type: Date, default: Date.now, expires: 43200 } // 12 hours
});

module.exports = User = mongoose.model("users", UserSchema);