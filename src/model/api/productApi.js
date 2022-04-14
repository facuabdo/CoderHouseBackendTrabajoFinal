import productoFsDAO from "../../persistance/productoFsDAO";

export class ProductApi {
  constructor() {
    //En el futuro abstraemos la creación con una factory
    //según el tipo de persistencia
    this.productoDAO = productoFsDAO;
  }
  async getAll() {
    try {
      await this.productoDAO.obtenerTodos();
    } catch (error) {
      console.log(error);
    }
  }
  async getById(id) {
    try {
      await this.productoDAO.buscarPorId(id);
    } catch (error) {
      console.log(error);
    }
  }
  async crear(producto) {
    try {
      await this.productoDAO.guardar(producto);
    } catch (error) {
      console.log(error);
    }
  }
  async modificar(producto) {
    try {
      await this.productoDAO.guardar(producto);
    } catch (error) {
      console.log(error);
    }
  }
  async eliminar(id) {
    try {
      await this.productoDAO.borrar(id);
    } catch (error) {
      console.log(error);
    }
  }
}
