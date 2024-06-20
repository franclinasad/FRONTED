import axios from "axios";

const DETALLE_PRODUCTOS_API_URL = "http://localhost:8080/api/v1/detalleProducto";

class DetalleProductoServicio {
  createDetalleProducto(detalleProducto) {
    return axios.post(DETALLE_PRODUCTOS_API_URL, detalleProducto);
  }

  getAllDetalleProducto() {
    return axios.get(DETALLE_PRODUCTOS_API_URL);
  }

  getDetalleProductoById(id) {
    return axios.get(`${DETALLE_PRODUCTOS_API_URL}/${id}`);
  }

  deleteDetalleProducto(id) {
    return axios.delete(`${DETALLE_PRODUCTOS_API_URL}/${id}`);
  }
}

export default new DetalleProductoServicio();

