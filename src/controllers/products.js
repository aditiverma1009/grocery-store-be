import db from "../../models/index.js";
import axios from "axios";

const productsController = async () => {
  const allProducts = await db.Products.findAll();
  if (allProducts.length === 0) {
    // populate data
    try {
      const { data } = await axios.get(`${process.env.PRODUCT_DATA_URL}`);
      const productsCreated = await db.Products.bulkCreate(
        data.inventory.map((eachProduct) => {
          const {
            id,
            category,
            brand,
            title,
            availableQuantity,
            cost,
            description,
          } = eachProduct;
          return {
            productId: eachProduct.id,
            category,
            brand,
            title,
            availableQuantity,
            cost,
            description,
          };
        })
      );
      return productsCreated;
    } catch {
      throw new Error("Product API failed");
    }
  } else {
    return allProducts;
  }
};

export default productsController;
