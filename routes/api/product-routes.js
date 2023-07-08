// Import the required dependencies
const router = require('express').Router();
const { Product, inventory, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// Route: GET /api/products
// Description: Get all products
router.get('/', async (req, res) => {
  try {
    // Find all products and include associated inventory and tags
    const products = await Product.findAll({
      include: [{ model: inventory }, { model: Tag }]
    });
    // Send the response with the products
    res.status(200).json(products);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Route: GET /api/products/:id
// Description: Get a specific product by ID
router.get('/:id', async (req, res) => {
  try {
    // Find the product with the specified ID and include associated inventory and tags
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: inventory }, { model: Tag }]
    });
    if (!product) {
      // If no product found with the specified ID, send a 404 response with an error message
      res.status(404).json({ message: 'No product found with that id.' });
      return;
    }
    // Send the response with the product
    res.status(200).json(product);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Route: POST /api/products
// Description: Create a new product
router.post('/', (req, res) => {

  Product.create(req.body)
    .then((product) => {
      // If there are product tags, create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // If no product tags, just respond with the created product
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Route: PUT /api/products/:id
// Description: Update a specific product by ID
router.put('/:id', (req, res) => {
  // Update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // Find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // Get a list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // Create a filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // Figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // Run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// Route: DELETE /api/products/:id
// Description: Delete a specific product by ID
router.delete('/:id', async (req, res) => {
  try {
    // Delete the product with the specified ID
    const product = await Product.destroy({
      where: {
        id: req.params.id
      },
    });
    if (!product) {
      // If no product found with the specified ID, send a 404 response with an error message
      res.status(404).json({ message: 'No product found with that id.' });
      return;
    }
    // Send the response with the deleted product
    res.status(200).json(product);
  } catch (err) {
    // Handle any errors that occurred during the request
    res.status(500).json(err);
  }
});

// Export the router to be used in other files
module.exports = router;
