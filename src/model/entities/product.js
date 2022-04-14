import { BaseEntity } from "./base/baseEntity.js";

export class Product extends BaseEntity {
  constructor(id, name, description, code, picture, price, stock) {
    super(id);
    this.name = name;
    this.description = description;
    this.code = code;
    this.picture = picture;
    this.price = price;
    this.stock = stock ?? 0;
  }
}
