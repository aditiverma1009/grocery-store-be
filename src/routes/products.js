import { Router } from "express";
import productsController from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", async (_, response) => {
  try {
    const productList = await productsController();
    response.status(200).send(productList);
  } catch (err) {
    response.status(500).send("Something broke!");
  }
});

export default productsRouter;
