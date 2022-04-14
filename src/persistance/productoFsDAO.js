import { FileSystemPersistance } from "./base/fsPersistance";
import { Producto } from "./../model/entities/producto";

const productoFsDAO = new FileSystemPersistance(Producto, "./files");
export default productoFsDAO;
