// import models
const Product = require('./Product');
const Inventory = require('./inventory'); // Corrected file name to lowercase
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Inventory
Product.belongsTo(Inventory, {
  foreignKey: 'inventory_id',
});

// Categories have many Products
Inventory.hasMany(Product, {
  foreignKey: 'inventory_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Inventory,
  Tag,
  ProductTag,
};
