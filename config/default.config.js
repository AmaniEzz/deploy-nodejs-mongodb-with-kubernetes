// If you were running MongoDB and Node.js on the same server, you would access MongoDB like so:
// mongodb://localhost:27017/database-name
// With this Kubernetes setup, that line of code would become:
// mongodb://mongo:27017/database-name
module.exports = {
  dbUrl: "mongodb://mongo:27017/todo-app",
};
