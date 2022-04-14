import fs from "fs";
import { __dirname } from "../../utils/utils.js";

export class FileSystemPersistance {
  constructor(clase) {
    this.filePath = __dirname + "/dbfiles/" + clase.name + ".json";
  }

  async getAll() {
    try {
      const entities = await fs.promises.readFile(this.filePath, {
        encoding: "utf-8",
      });
      return JSON.parse(entities || "[]");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getById(id) {
    try {
      let entities = await this.getAll();
      return entities.find((item) => {
        if (item.id === id) return true;
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createOrUpdate(entidad) {
    let entities = await this.getAll();
    try {
      let existing = entities.find((item) => {
        return item.id === entidad.id;
      });

      if (existing) {
        entities = entities.filter((item) => {
          return item.id !== entidad.id;
        });
      }
      entities.push(entidad);
      await fs.promises.writeFile(this.filePath, JSON.stringify(entities));
      return await this.getAll();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async _delete(id) {
    try {
      let entities = await this.getAll();
      let filtered =
        entities.filter((item) => {
          return item.id !== id;
        }) || [];
      await fs.promises.writeFile(this.filePath, JSON.stringify(filtered));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteAll() {
    try {
      await fs.promises.unlink(this.filePath);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
