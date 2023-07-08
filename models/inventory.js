const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    inventory_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'inventory',
  }
);

module.exports = Inventory;
