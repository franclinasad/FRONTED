import axios from "axios";

const url="http://localhost:8080/api/v1/pago"
class ClienteService {
    getAllClientes (){
        return axios.get(url);
    }

    createCliente(cliente){
        return axios.post(url,cliente);
    }

    getClienteById (clienteId){
        return axios.get(url+'/'+clienteId);
    }

    // aqui le pasamos lo snuevo clientes 
    updateCliente(clienteId,cliente){
        return axios.put(url+'/'+clienteId,cliente);
    }

    deleteCliente(clienteId){
        return axios.delete(url+'/'+clienteId);
    }

}


export default new ClienteService();
