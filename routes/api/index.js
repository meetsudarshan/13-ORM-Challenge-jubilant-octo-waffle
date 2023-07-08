const router = require('express').Router();
const inventoryRoutes = require('./inventory-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/inventories', inventoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
