const sequelize = require('../config/connection');
const { Inventory, Product, Tag, ProductTag } = require('../models');

const seedInventory = require('./inventory');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED -----\n');

  await seedInventory();
  console.log('\n----- INVENTORY SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  console.log('\n----- DATABASE SEEDED -----\n');

  process.exit(0);
};

seedAll();
