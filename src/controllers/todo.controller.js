const todoService = require("../services/todo.service");

// Get all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.send(todos);
  } catch (error) {
    res.status(500).send({ error: "couldn't fetch all todos" });
  }
};

// Get a todo by ID
const getTodoById = async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(400).send({ message: "id must be provided" });
    }
    const todo = await todoService.getTodoById(req.params.id);
    res.send(todo);
  } catch (error) {
    res
      .status(404)
      .send({ error: `Couldn't retrieve a todo with id ${req.params.id}` });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await todoService.createTodo(title, description);
    res.send(todo);
  } catch (error) {
    res.status(500).send({ error: `Todo creation failed` });
  }
};

// Edit a todo by ID
const editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await todoService.editTodo(id, title, description);
    res.send(todo);
  } catch (error) {
    res.status(404).send({
      error: `Couldn't update a todo with id ${req.params.id}`,
    });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  editTodo,
};
