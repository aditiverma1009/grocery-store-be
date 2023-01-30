"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init(
    {
      productId: DataTypes.INTEGER,
      category: DataTypes.STRING,
      brand: DataTypes.STRING,
      title: DataTypes.STRING,
      availableQuantity: DataTypes.INTEGER,
      cost: DataTypes.FLOAT,
      description: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
