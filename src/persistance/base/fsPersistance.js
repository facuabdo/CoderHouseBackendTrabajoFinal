import fs from "fs";
import { __dirname } from "../../utils/utils";

export class FileSystemPersistance {
  constructor(clase) {
    this.clase = clase.name;
    this.filePath = __dirname + "/dbfiles/" + this.clase.name + ".json";
  }

  async obtenerTodos() {
    try {
      const contenido = await fs.promises.readFile(this.filePath, {
        encoding: "utf-8",
      });
      return JSON.parse(contenido);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async buscarPorId(id) {
    try {
      let arrayEntidades = this.obtenerTodos();
      return arrayEntidades.find((item) => {
        if (item.id === id) return true;
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async guardar(entidad) {
    let entidades = await this.obtenerTodos();
    try {
      entidades.push(entidad);
      await fs.promises.writeFile(this.filePath, JSON.stringify(entidades));
      return await this.obtenerTodos();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async borrar(id) {
    try {
      let entidades = await this.obtenerTodos();
      entidades.filter((item) => {
        return item.id !== id;
      });
      await fs.promises.writeFile(this.filePath, JSON.stringify(entidades));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async borrar() {
    try {
      await fs.promises.unlink(this.filePath);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
