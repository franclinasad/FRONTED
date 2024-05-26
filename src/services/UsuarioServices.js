import axios, { Axios } from "axios";

const enpoint = "http://localhost:8082/api/v1/usuarios";

class UsuarioServices{
        getAllUsuarios()
        {
            return axios.get(enpoint);
        }

        createCliente(cliente)
        {
            return axios.post(enpoint,cliente);
        }
}


export default new UsuarioServices();