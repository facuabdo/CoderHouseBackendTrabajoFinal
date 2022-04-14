import productFsDAO from "../../persistance/productFsDAO.js";
import { Product } from "../entities/product.js";

export class ProductApi {
  constructor() {
    //En el futuro abstraemos la creación con una factory
    //según el tipo de persistencia
    this.productDAO = productFsDAO;
  }
  async getAll() {
    try {
      return await this.productDAO.getAll();
    } catch (error) {
      throw error;
    }
  }
  async getById(id) {
    try {
      return await this.productDAO.getById(id);
    } catch (error) {
      throw error;
    }
  }
  async createOrUpdate(product) {
    try {
      const prod = new Product(
        product.id,
        product.name,
        product.description,
        product.code,
        product.picture,
        product.price,
        product.stock
      );
      await this.productDAO.createOrUpdate(prod);
      return prod;
    } catch (error) {
      throw error;
    }
  }

  async _delete(id) {
    try {
      await this.productDAO._delete(id);
    } catch (error) {
      throw error;
    }
  }
}
