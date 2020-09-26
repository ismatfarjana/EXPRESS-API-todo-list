const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    todo: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Todo = mongoose.model("exercise", todoSchema);

module.exports = Todo;
