const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DatapointSchema = new Schema({
  userid: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: True
  },
  notes: {
    type: String,
    required: false
  },
  sleeptime: {
    type: Number,
    required: true
  },
  sleepquality: {
      type: Number,
      required: true
  },
  expires: { type: Date, default: Date.now, expires: 43200 } // 12 hours
});

module.exports = User = mongoose.model("users", DatapointSchema);