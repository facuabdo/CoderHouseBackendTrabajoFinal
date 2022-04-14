import { BaseEntity } from "./base/baseEntity.js";

export class Cart extends BaseEntity {
  constructor() {
    //productos es array de la clase product;
    super();
    this.products = [];
  }
}
