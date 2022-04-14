export class ProductController {
  getAll(req, res, next) {
    try {
      res.status(200);
      res.send("Endpoint de obtener todos");
    } catch (error) {
      next(error);
    }
  }
  getById(req, res, next) {
    try {
      const id = req.params.id;
      res.status(200);
      res.send("Endpoint de obtener por ID: " + id);
    } catch (error) {
      next(error);
    }
  }
  createOrUpdate(req, res, next) {
    try {
      const product = req.body;
      let response = "";
      if (product.id) {
        response = "Endpoint de actualización del producto " + product.id;
      } else {
        response = "Endpoint de creación";
      }
      res.status(200);
      res.send(response);
    } catch (error) {
      next(error);
    }
  }
  delete(req, res, next) {
    try {
      const id = req.params.id;
      res.status(200);
      res.send("Endpoint de eliminación del producto " + id);
    } catch (error) {
      next(error);
    }
  }
}
