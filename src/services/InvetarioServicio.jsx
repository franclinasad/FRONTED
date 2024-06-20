import axios from "axios";

import React from "react";

const INVENTARIO_API_URL = "http://localhost:8080/api/v1/inventario";

class InventarioServicio {
  getAllInventario() {
    return axios.get(INVENTARIO_API_URL);

    console.log(axios.get("holaaaaa "+INVENTARIO_API_URL));
  }

  // Otros métodos CRUD que podrías necesitar
  getInventarioById(id) {
    return axios.get(`${INVENTARIO_API_URL}/${id}`);
  }

  createInventario(inventario) {
    return axios.post(INVENTARIO_API_URL, inventario);
  }

  updateInventario(id, inventario) {
    return axios.put(`${INVENTARIO_API_URL}/${id}`, inventario);
  }

  deleteInventario(id) {
    return axios.delete(`${INVENTARIO_API_URL}/${id}`);
  }
}


export default new InventarioServicio();
