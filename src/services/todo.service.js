const Todo = require("../models/todo.model");

// Get all todos
const getAllTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

// Get a todo by ID
const getTodoById = async (id) => {
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    return todo;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

// Create a new todo
const createTodo = async (title, description) => {
  try {
    const todo = new Todo({
      title,
      description,
    });
    await todo.save();
    return todo;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

// Edit a todo by ID
const editTodo = async (id, title, description) => {
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    todo.title = title;
    todo.description = description;
    await todo.save();
    return todo;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  editTodo,
};
