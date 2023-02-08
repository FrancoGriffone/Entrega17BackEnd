import ProductoModel from "../models/ProductoModel.js";

const productos = [];

const ProductoController = {
    
  listar(id) {
    let producto = ProductoModel.productos.find((prod) => prod.id == id);
    return producto || { error: "producto no encontrado" };
  },

  listarAll() {
    return ProductoModel.productos.length
      ? ProductoModel.productos
      : { error: "no hay productos cargados" };
  },

  guardar(prod) {
    prod.id = ++this.id;
    prod.timeStamp = Date.now();
    ProductoModel.productos.push(prod);
    return prod;
  },

  actualizar(prod, id) {
    prod.id = Number(id);
    let index = ProductoModel.productos.findIndex((prod) => prod.id == id);
    ProductoModel.productos.splice(index, 1, prod);
  },

  borrar(id) {
    let index = ProductoModel.productos.findIndex((prod) => prod.id == id);
    return ProductoModel.productos.splice(index, 1);
  },
};

export default ProductoController