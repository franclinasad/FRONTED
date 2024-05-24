import axios, { Axios } from "axios";

const enpoint = "http://localhost:8080/api/v1/usuarios";

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