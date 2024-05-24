import React, { useState, useEffect } from 'react';
import UsuarioServices from '../services/UsuarioServices';

const Saldo = ({ userId }) => {
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
        console.error('Error fetching usuarios:', error);
      });
  }, [userId]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Saldo de Cuenta</h1>
      <div className="mb-6">
        <div className="text-lg font-semibold">Titular:</div>
        <div className="text-xl">{profileData.nombre} {profileData.apellidos}</div>
      </div>
      <div className="py-4 px-6 bg-white text-gray-800 rounded-lg shadow-inner">
        <div className="text-lg font-semibold">Saldo Disponible</div>
        <div className="text-3xl font-bold text-green-600">${profileData.saldo.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Saldo;
