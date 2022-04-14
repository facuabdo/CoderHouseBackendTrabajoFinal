import { FileSystemPersistance } from "./base/fsPersistance.js";
import { Product } from "../model/entities/product.js";

const productFsDAO = new FileSystemPersistance(Product, "./files");
export default productFsDAO;
