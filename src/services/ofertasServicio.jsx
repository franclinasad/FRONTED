import axios from "axios";

import React from "react";

const OFERTAS_API_URL = "http://localhost:8080/api/v1/promociones";

class ofertasServicio {
  getAllOfertas() {
    return axios.get(OFERTAS_API_URL);

    console.log(axios.get("holaaaaa "+PRODUCTOS_API_URL));
  }

  // Otros métodos CRUD que podrías necesitar
  getOfertasById(id) {
    return axios.get(`${OFERTAS_API_URL}/${id}`);
  }

  createOfertas(ofertas) {
    return axios.post(OFERTAS_API_URL, ofertas);
  }

  updateOfertas(id, ofertas) {
    return axios.put(`${OFERTAS_API_URL}/${id}`, ofertas);
  }

  deleteOfertas(id) {
    return axios.delete(`${OFERTAS_API_URL}/${id}`);
  }
}


export default new ofertasServicio();


