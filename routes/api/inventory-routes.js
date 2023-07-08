// Import the required dependencies
const router = require('express').Router();
const { Inventory, Product } = require('../../models');

// Define routes for inventory-related operations

// Route: GET /api/inventories
// Description: Get all inventory items
router.get('/', async (req, res) => {
  try {
    // Find all inventory items and include associated products
    const inventoryItems = await Inventory.findAll({
      include: [{ model: Product }]
    });
    // Send the response with the inventory items
    res.status(200).json(inventoryItems);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Route: GET /api/inventories/:id
// Description: Get a specific inventory item by ID
router.get('/:id', async (req, res) => {
  try {
    // Find the inventory item with the specified ID and include associated products
    const inventoryData = await Inventory.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!inventoryData) {
      // If no inventory item found with the specified ID, send a 404 response with an error message
      res.status(404).json({ message: 'No inventory item found with this id.' });
      return;
    }
    // Send the response with the inventory item
    res.status(200).json(inventoryData);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Route: POST /api/inventories
// Description: Create a new inventory item
router.post('/', async (req, res) => {
  try {
    // Create a new inventory item using the provided request body
    const newInventory = await Inventory.create(req.body);
    // Send the response with the newly created inventory item
    res.status(200).json(newInventory);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(400).json(err);
  }
});

// Route: PUT /api/inventories/:id
// Description: Update a specific inventory item by ID
router.put('/:id', async (req, res) => {
  try {
    // Update the inventory item with the specified ID using the provided request body
    const updateInventory = await Inventory.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!updateInventory[0]) {
      // If no inventory item found with the specified ID, send a 404 response with an error message
      res.status(404).json({ message: 'No inventory item found with this id.' });
      return;
    }
    // Send the response with the updated inventory item
    res.status(200).json(updateInventory);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Route: DELETE /api/inventories/:id
// Description: Delete a specific inventory item by ID
router.delete('/:id', async (req, res) => {
  try {
    // Delete the inventory item with the specified ID
    const deleteInventory = await Inventory.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteInventory) {
      // If no inventory item found with the specified ID, send a 404 response with an error message
      res.status(404).json({ message: 'No inventory item found with this id.' });
      return;
    }
    // Send the response with the number of deleted inventory items
    res.status(200).json(deleteInventory);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Export the router to be used in other files
module.exports = router;
