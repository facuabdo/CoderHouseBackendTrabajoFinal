import express from "express";
import CONSTANTS from "./config/constants.js";
import { default as productRouter } from "./routes/productRoutes.js";

const app = express();

const PORT = process.env.PORT || CONSTANTS.DEFAULT_PORT;
const PERSISTENCE_TYPE =
  process.env.PERSISTENCE_TYPE || CONSTANTS.DEFAULT_PERSISTENCE;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);

const server = app.listen(PORT, () => {
  console.log("Server running in port " + PORT);
});
