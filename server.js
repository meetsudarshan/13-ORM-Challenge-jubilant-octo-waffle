// Import the required dependencies
const express = require('express');
const routes = require('./routes');
// Import the sequelize connection

// Create an instance of the Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use(routes);

// Start the server by syncing sequelize models to the database and listening on the specified port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
