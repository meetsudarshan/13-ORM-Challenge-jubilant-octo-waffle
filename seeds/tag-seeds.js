const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock genre',
  },
  {
    tag_name: 'pop genre',
  },
  {
    tag_name: 'blue color',
  },
  {
    tag_name: 'red color',
  },
  {
    tag_name: 'green color',
  },
  {
    tag_name: 'white color',
  },
  {
    tag_name: 'gold color',
  },
  {
    tag_name: 'pop culture',
  },
  {
    tag_name: 'stylish',
  },
  {
    tag_name: 'comfortable',
  },
  {
    tag_name: 'branded',
  },
  {
    tag_name: 'popular',
  },
  {
    tag_name: 'versatile',
  },
  {
    tag_name: 'fashionable',
  },
  {
    tag_name: 'electronics',
  },
  {
    tag_name: 'bestseller',
  },
  {
    tag_name: 'home decor',
  },
  {
    tag_name: 'sporting goods',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
