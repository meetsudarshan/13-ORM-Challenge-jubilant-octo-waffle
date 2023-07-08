// Import the required dependencies
const router = require('express').Router();
const apiRoutes = require('./api');

// Route: /api
// Description: Handle all API routes
router.use('/api', apiRoutes);

// Route: *
// Description: Handle any routes that don't match the /api routes
router.use((req, res) => {
  // Send a response with an HTML message indicating a wrong route
  res.send("<h1>Wrong Route!</h1>");
});

// Export the router to be used in other files
module.exports = router;
