// Import the required dependencies
const router = require('express').Router();
const inventoryRoutes = require('./inventory-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Define routes for different resources
// '/inventories' route will be handled by inventoryRoutes
router.use('/inventories', inventoryRoutes);

// '/products' route will be handled by productRoutes
router.use('/products', productRoutes);

// '/tags' route will be handled by tagRoutes
router.use('/tags', tagRoutes);

// Export the router to be used in other files
module.exports = router;
