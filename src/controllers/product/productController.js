import { ProductApi } from "../../model/api/productApi.js";
export class ProductController {
  constructor() {}

  async getAll(req, res, next) {
    try {
      const allProducts = await new ProductApi().getAll();
      res.status(200);
      res.send(allProducts);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const id = req.params.id;
      const product = await new ProductApi().getById(id);
      res.status(200);
      res.send(product);
    } catch (error) {
      next(error);
    }
  }
  async createOrUpdate(req, res, next) {
    try {
      const product = await new ProductApi().createOrUpdate(req.body);
      res.status(200);
      res.send(product);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const id = req.params.id;
      await new ProductApi()._delete(id);
      res.status(204);
      res.send();
    } catch (error) {
      next(error);
    }
  }
}
