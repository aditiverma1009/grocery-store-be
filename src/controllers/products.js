import db from "../../models/index.js";
import axios from "axios";

const productsController = async () => {
  const allProducts = await db.Products.findAll();
  if (allProducts.length === 0) {
    // populate data
    try {
      // const products = await axios.get(`${process.env.PRODUCT_DATA_URL}`);
      const { data } = await axios.get(
        "https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/inventory"
      );
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
