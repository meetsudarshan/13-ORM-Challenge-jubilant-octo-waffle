const router = require('express').Router();
const { Inventory, Product } = require('../../models');



router.get('/', async (req, res) => {

  try {
    const inventoryItems = await Inventory.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(inventoryItems);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const inventoryData = await Inventory.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!inventoryData) {
      res.status(404).json({ message: 'No inventory item found with this id.' });
      return;
    }
    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newInventory = await Inventory.create(req.body);
    res.status(200).json(newInventory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateInventory = await Inventory.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!updateInventory[0]) {
      res.status(404).json({ message: 'No inventory item found with this id.' });
      return;
    }
    res.status(200).json(updateInventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteInventory = await Inventory.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteInventory) {
      res.status(404).json({ message: 'No inventory item found with this id.' });
      return;
    }
    res.status(200).json(deleteInventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
