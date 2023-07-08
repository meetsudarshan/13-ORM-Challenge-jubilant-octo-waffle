// Import the required dependencies
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Route: GET /api/tags
// Description: Get all tags
router.get('/', async (req, res) => {
  try {
    // Find all tags and include associated products through ProductTag
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    });
    // Send the response with the tags
    res.status(200).json(tags);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Route: GET /api/tags/:id
// Description: Get a specific tag by ID
router.get('/:id', async (req, res) => {
  try {
    // Find the tag with the specified ID and include associated products through ProductTag
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }]
    });
    if (!tag) {
      // If no tag found with the specified ID, send a 404 response with an error message
      res.status(404).json({ message: 'No tag found with that id.' });
    }
    // Send the response with the tag
    res.status(200).json(tag);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Route: POST /api/tags
// Description: Create a new tag
router.post('/', async (req, res) => {
  try {
    // Create a new tag with the provided data
    const tag = await Tag.create(req.body);
    // Send the response with the created tag
    res.status(200).json(tag);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(400).json(err);
  }
});

// Route: PUT /api/tags/:id
// Description: Update a specific tag by ID
router.put('/:id', async (req, res) => {
  try {
    // Update the name of the tag with the specified ID
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!tag[0]) {
      // If no tag found with the specified ID, send a 404 response with an error message
      res.status(404).json({ message: 'No tag found with this id.' });
      return;
    }
    // Send the response with the updated tag
    res.status(200).json(tag);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Route: DELETE /api/tags/:id
// Description: Delete a specific tag by ID
router.delete('/:id', async (req, res) => {
  try {
    // Delete the tag with the specified ID
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      },
    });
    if (!tag) {
      // If no tag found with the specified ID, send a 404 response with an error message
      res.status(404).json({ message: 'No product found with that id.' });
      return;
    }
    // Send the response with the deleted tag
    res.status(200).json(tag);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Export the router to be used in other files
module.exports = router;
