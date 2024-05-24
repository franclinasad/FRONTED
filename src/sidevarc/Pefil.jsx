import React, { useState, useEffect } from 'react';
import UsuarioServices from '../services/UsuarioServices';

const Perfil = ({ userId }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    UsuarioServices.getAllUsuarios()
      .then(response => {
        setUsuarios(response.data);
        const user = response.data.find(usuario => usuario.id === userId);
        if (user) {
          setProfileData(user);
        }
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [userId]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-gradient-to-r from-teal-700 to-blue-900 rounded-lg shadow-lg text-white">
      <h1 className="text-2xl font-bold text-center mb-6">Mi Perfil</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Información Personal</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2 border-gray-300">
            <label className="font-semibold">Nombre:</label>
            <span>{profileData.nombre}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2 border-gray-300">
            <label className="font-semibold">Apellidos:</label>
            <span>{profileData.apellidos}</span>
          </div>
        </div>
      </div>

      <div className="mb-6 my-10">
        <h2 className="text-xl font-semibold mb-2">Credenciales</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2 border-gray-300">
            <label className="font-semibold">Email:</label>
            <span>{profileData.email}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2 border-gray-300">
            <label className="font-semibold">Password:</label>
            <span>{profileData.password}</span>
          </div>
        </div>
      </div>

      <div className="mb-6 my-10">
        <h2 className="text-xl font-semibold mb-2">Contacto</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2 border-gray-300">
            <label className="font-semibold">Dirección:</label>
            <span>{profileData.direccion}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2 border-gray-300">
            <label className="font-semibold">Teléfono:</label>
            <span>{profileData.telefono}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
