import axios, { Axios } from "axios";

const endpoint = "http://localhost:8080/api/v1/usuarios"; // Corregido a endpoint

class UsuarioServices{
        getAllUsuarios()
        {
            return axios.get(endpoint);
        }

        createCliente(cliente)
        {
            return axios.post(endpoint,cliente);
        }


        descontarSaldoUsuario(usuarioId, monto) {
          const data = { totalPedido: monto };
          return axios.put(`${endpoint}/${usuarioId}/descontarSaldo`, data);
      }
}


export default new UsuarioServices();