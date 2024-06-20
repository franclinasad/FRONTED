import axios from 'axios';

const PEDIDO_API_BASE_URL = 'http://localhost:8080/api/v1/pedidos';

class PedidoServicio {
  createPedido(pedido) {
    return axios.post(PEDIDO_API_BASE_URL, pedido);
  }
}

export default new PedidoServicio();
