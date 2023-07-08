const { Product } = require('../models');

const productData = [
  {
    product_name: 'Stylish Top',
    price: 14.99,
    stock: 14,
    inventory_id: 1,
  },
  {
    product_name: 'Comfortable Bottoms',
    price: 90.0,
    stock: 25,
    inventory_id: 2,
  },
  {
    product_name: 'Branded Headwear',
    price: 22.99,
    stock: 12,
    inventory_id: 4,
  },
  {
    product_name: 'Popular Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    inventory_id: 3,
  },
  {
    product_name: 'Versatile Shorts',
    price: 29.99,
    stock: 22,
    inventory_id: 5,
  },
  {
    product_name: 'Fashionable Accessories Set',
    price: 19.99,
    stock: 30,
    inventory_id: 6,
  },
  {
    product_name: 'Electronics Gadgets Bundle',
    price: 299.99,
    stock: 8,
    inventory_id: 7,
  },
  {
    product_name: 'Bestseller Books Collection',
    price: 9.99,
    stock: 40,
    inventory_id: 8,
  },
  {
    product_name: 'Home Decor Items',
    price: 49.99,
    stock: 18,
    inventory_id: 9,
  },
  {
    product_name: 'Sporting Goods Equipment Set',
    price: 149.99,
    stock: 10,
    inventory_id: 10,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
