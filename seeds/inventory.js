const { Inventory } = require('../models');

const inventoryList = [
  {
    inventory_category: 'Tops',
  },
  {
    inventory_category: 'Bottoms',
  },
  {
    inventory_category: 'Entertainment',
  },
  {
    inventory_category: 'Headwear',
  },
  {
    inventory_category: 'Footwear',
  },
  {
    inventory_category: 'Accessories',
  },
  {
    inventory_category: 'Electronics',
  },
  {
    inventory_category: 'Books',
  },
  {
    inventory_category: 'Home Decor',
  },
  {
    inventory_category: 'Sporting Goods',
  },
];

const seedInventory = async () => {
  try {
    await Inventory.bulkCreate(inventoryList);
    console.log('\n----- INVENTORY SEEDED -----\n');
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedInventory;
