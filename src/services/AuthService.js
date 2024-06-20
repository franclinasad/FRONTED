import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/login';

class AuthService {
  async login(email, password) {
    try {
      const response = await axios.post(API_URL, { email, password });
      console.log('Respuesta del servidor:', response);

      // Verifica si la respuesta del servidor contiene el mensaje "Login successful"
      if (response.data.message === "Login successful") {
        // Retorna el ID del usuario extraído del cuerpo de la respuesta
        const userId = response.data.userId;
        const nombre = response.data.nombre;

        console.log(nombre);
        console.log(userId);
        return {userId,nombre};
      } else {
        // Si la respuesta no contiene el mensaje "Login successful", lanza un error con el mensaje de la respuesta
        const errorMessage = typeof response.data === 'object' ? JSON.stringify(response.data) : response.data;
        throw new Error(`Error del servidor: ${errorMessage}`);
      }
    } catch (error) {
      // Si hay un error al enviar la solicitud o al recibir la respuesta, lanza una excepción
      console.error('Error en el inicio de sesión:', error);
      throw new Error('Error en el inicio de sesión: ' + (error.response ? JSON.stringify(error.response.data) : error.message));
    }
  }
}
export default new AuthService();
