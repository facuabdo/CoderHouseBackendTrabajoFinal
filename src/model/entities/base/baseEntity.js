import { randomUUID } from "crypto";

export class BaseEntity {
  constructor() {
    this.id = randomUUID();
    this.timestamp = Date.now();
  }
}
