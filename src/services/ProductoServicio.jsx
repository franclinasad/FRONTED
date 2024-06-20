import axios from "axios";

import React from "react";

const PRODUCTOS_API_URL = "http://localhost:8080/api/v1/productos";

class ProductosServicio {

  getAllProductos() {
    return axios.get(PRODUCTOS_API_URL);

    console.log(axios.get("holaaaaa "+PRODUCTOS_API_URL));
  }

  // Otros métodos CRUD que podrías necesitar
  getProductoById(id) {
    return axios.get(`${PRODUCTOS_API_URL}/${id}`);
  }

  createProducto(producto) {
    return axios.post(PRODUCTOS_API_URL, producto);
  }

  updateProducto(id, producto) {
    return axios.put(`${PRODUCTOS_API_URL}/${id}`, producto);
  }

  deleteProducto(id) {
    return axios.delete(`${PRODUCTOS_API_URL}/${id}`);
  }
  
    
}




export default new ProductosServicio();
