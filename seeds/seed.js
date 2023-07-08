const sequelize = require('../config/connection');
const { Inventory, Product, Tag, ProductTag } = require('../models');

const seedInventory = require('./inventory');
const seedProducts = require('./product-seeds');
const seedproductTags = require('./product-tag-seeds');
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

  await seedproductTags();
  console.log('\n----- PRODUCTS TAGS SEEDED -----\n');

  console.log('\n----- DATABASE SEEDED -----\n');

  process.exit(0);
};

seedAll();
