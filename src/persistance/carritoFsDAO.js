import { Carrito } from "../model/entities/carrito";
import { FileSystemPersistance } from "./base/fsPersistance";

const carritoFsDAO = new FileSystemPersistance(Carrito, "./files");
export default carritoFsDAO;
