const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DatapointSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: false
  },
  sleeptime: {
    type: Int32Array,
    required: true
  },
  sleepquality: {
      type: Int32Array,
      required: true
  },
  expires: { type: Date, default: Date.now, expires: 43200 } // 12 hours
});

module.exports = User = mongoose.model("users", UserSchema);