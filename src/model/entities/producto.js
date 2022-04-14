import { BaseEntity } from "./base/baseEntity";

export class Producto extends BaseEntity {
  constructor(nombre, descripcion, codigo, foto, precio, stock) {
    super();
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.codigo = codigo;
    this.foto = foto;
    this.precio = precio;
    this.stock = stock ?? 0;
  }
}
