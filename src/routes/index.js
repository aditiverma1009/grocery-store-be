import healthCheckRouter from "./healthcheck.js";
import productsRouter from "./products.js";

const router = (app) => {
  // common middleware time logger
  app.use((req, res, next) => {
    next();
  });

  app.use(healthCheckRouter);
  app.use(productsRouter);
};

export default router;
