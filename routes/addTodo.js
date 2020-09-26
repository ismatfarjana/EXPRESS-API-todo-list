const express = require("express");
const router = express.Router();
let Todo = require("../models/todo.model");

/* GET users listing. */
router.post("/", function(req, res, next) {
  const todo = req.body.todo;

  const newTodo = new Todo({
    todo
  });

  newTodo
    .save()
    .then(() => res.json("New todo added to the log!"))
    .catch(err => res.status(400).json("error:" + err));
});

module.exports = router;
