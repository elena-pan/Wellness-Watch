const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DatapointSchema = new Schema({
  userid: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
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
  actualization: {
    type: Number,
    required: true
  },
  esteem: {
      type: Number,
      required: true
  },
  belongingness: {
      type: Number,
      required: true
  },
  safety: {
      type: Number,
      required: true
  },
  physiological: {
      type: Number,
      required: true
  }
});

module.exports = User = mongoose.model("users", DatapointSchema);