const express = require("express");
const todoController = require("../controllers/todo.controller");

// Router
const router = express.Router();

// Get all todos
router.get("/", todoController.getAllTodos);

// Get a todo by ID
router.get("/:id", todoController.getTodoById);

// Create a new todo
router.post("/", todoController.createTodo);

// Edit a todo by ID
router.put("/:id", todoController.editTodo);

module.exports = router;
