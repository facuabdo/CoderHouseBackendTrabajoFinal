import { BaseEntity } from "./base/baseEntity";

export class Carrito extends BaseEntity {
  constructor() {
    //productos es array de la clase producto;
    super();
    this.productos = [];
  }
}
