import { randomUUID } from "crypto";

export class BaseEntity {
  constructor(id) {
    this.id = id ? id : randomUUID();
    this.timestamp = Date.now();
  }
}
