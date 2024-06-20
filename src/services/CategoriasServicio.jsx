import axios from "axios";

import React from "react";

const CATEGORIAS_API_URL = "http://localhost:8080/api/v1/categorias";

class CategoriasServicio {
  getAllCategoria() {
    return axios.get(CATEGORIAS_API_URL);

    console.log(axios.get("holaaaaa "+CATEGORIAS_API_URL));
  }

  // Otros métodos CRUD que podrías necesitar
  getCategoriaById(id) {
    return axios.get(`${CATEGORIAS_API_URL}/${id}`);
  }

  createCategoria(categoria) {
    return axios.post(CATEGORIAS_API_URL, categoria);
  }

  updateCategoria(id, categoria) {
    return axios.put(`${CATEGORIAS_API_URL}/${id}`, categoria);
  }

  deleteCategoria(id) {
    return axios.delete(`${CATEGORIAS_API_URL}/${id}`);
  }
}


export default new CategoriasServicio();
