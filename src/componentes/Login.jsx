import React, { useState } from 'react';
import UsuarioServices from '../services/UsuarioServices';
import AuthService from '../services/AuthService';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccountForm = ({ onClose, onSuccess, onError }) => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [saldo, setSaldo] = useState('');

  const saveCliente = (e) => {
    e.preventDefault();
    const usuario = { nombre, apellidos, email, password, direccion, telefono, saldo };
    UsuarioServices.createCliente(usuario)
      .then((response) => {
        console.log(response.data);
        onSuccess(); // Llama a la función onSuccess al crear el usuario correctamente
        onClose(); // Cierra el formulario
      })
      .catch((error) => {
        console.log(error);
        onError(); // Llama a la función onError si hay un error al crear el usuario
      });
  };

  return (
    <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-md w-1/3">
      <h2 className="text-center text-3xl font-extrabold text-gray-200">Crear cuenta</h2>
      <form onSubmit={saveCliente} className="mt-4 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apellidos" className="block text-sm font-medium text-gray-300">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            autoComplete="apellidos"
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="direccion" className="block text-sm font-medium text-gray-300">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            autoComplete="direccion"
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-300">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            autoComplete="telefono"
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="saldo" className="block text-sm font-medium text-gray-300">Saldo</label>
          <input
            type="number"
            id="saldo"
            name="saldo"
            autoComplete="saldo"
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={saldo}
            onChange={(e) => setSaldo(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Crear cuenta
          </button>
        </div>
      </form>
      <button
        onClick={onClose}
        className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Cerrar
      </button>
    </div>
  );
};

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [message, setMessage] = useState(''); // Estado para el mensaje de éxito/error
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {userId, nombre} = await AuthService.login(email, password);

      console.log(await AuthService.login(email, password));
      

      console.log('ID del usuario:', userId);
      console.log('nombre del usuario:', nombre);

      if (userId) {
        console.log('Inicio de sesión exitoso');
        onLoginSuccess(userId,nombre);
        navigate('/inicio');
      } else {
        console.error('El servidor no devolvió el ID del usuario');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error.message);
      alert(`Error en el inicio de sesión: ${error.message}`);
    }
  };

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const handleCloseCreateAccount = () => {
    setShowCreateAccount(false);
  };

  const handleCreateAccountSuccess = () => {
    setMessage('Usuario creado correctamente');
    setTimeout(() => setMessage(''), 3000); // Limpia el mensaje después de 3 segundos
  };

  const handleCreateAccountError = () => {
    setMessage('Error al crear el usuario');
    setTimeout(() => setMessage(''), 3000); // Limpia el mensaje después de 3 segundos
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {showCreateAccount && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex items-center justify-center z-50">
          <CreateAccountForm
            onClose={handleCloseCreateAccount}
            onSuccess={handleCreateAccountSuccess}
            onError={handleCreateAccountError}
          />
        </div>
      )}
      <div className="max-w-md w-full space-y-8 bg-slate-800 p-8 rounded-lg shadow-md hover:bg-slate-900">
        <img src="/src/logoLim.png" alt="Error de imagen" width="200px" className="mx-auto block" />
        {message && (
          <div className="text-center text-white bg-green-500 rounded-md py-2 mb-4">
            {message}
          </div>
        )}
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-50">Iniciar sesión</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Correo electrónico</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar sesión
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleCreateAccountClick}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
