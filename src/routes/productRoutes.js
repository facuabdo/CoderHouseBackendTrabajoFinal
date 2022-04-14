import { Router } from "express";
import { ProductController } from "../controllers/product/productController.js";

const router = Router();
const productController = new ProductController();

router.get("/", productController.getAll);
router.get("/:id", productController.getById);

export default router;
