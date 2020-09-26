const express = require("express");
const router = express.Router();
let Todo = require("../models/todo.model");

/* GET users listing. */
router.get("/", function(req, res, next) {
  Todo.find() //mongoose call back function, it will find all Todo
    .then(todos => res.json(todos)) //read the json file
    .catch(err => res.status(400).json("Error:" + err)); //if anything wrong , throw error
});

module.exports = router;
