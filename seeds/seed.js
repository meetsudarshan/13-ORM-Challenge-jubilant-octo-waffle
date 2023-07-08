// Import the required dependencies
const sequelize = require('../config/connection');
const { Inventory, Product, Tag, ProductTag } = require('../models');

// Import the seed functions for each model
const seedInventory = require('./inventory');
const seedProducts = require('./product-seeds');
const seedproductTags = require('./product-tag-seeds');
const seedTags = require('./tag-seeds');

// Define the seedAll function to seed the database
const seedAll = async () => {
  // Sync the Sequelize models with the database and force sync to drop existing tables
  await sequelize.sync({ force: true });

  // Log a message indicating that the database has been synced
  console.log('\n----- DATABASE SYNCED -----\n');

  // Call the seedInventory function to seed the Inventory model/table
  await seedInventory();
  // Log a message indicating that the Inventory has been seeded
  console.log('\n----- INVENTORY SEEDED -----\n');

  // Call the seedTags function to seed the Tag model/table
  await seedTags();
  // Log a message indicating that the Tags have been seeded
  console.log('\n----- TAGS SEEDED -----\n');

  // Call the seedProducts function to seed the Product model/table
  await seedProducts();
  // Log a message indicating that the Products have been seeded
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // Call the seedproductTags function to seed the ProductTag model/table
  await seedproductTags();
  // Log a message indicating that the Product Tags have been seeded
  console.log('\n----- PRODUCTS TAGS SEEDED -----\n');

  // Log a message indicating that the database has been fully seeded
  console.log('\n----- DATABASE SEEDED -----\n');

  // Exit the process
  process.exit(0);
};

// Call the seedAll function to seed the database when this file is executed
seedAll();
