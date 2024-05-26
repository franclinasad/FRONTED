import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar ,nombre }) => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);


  const toggleUser = () => {
    setIsUserOpen(!isUserOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };






  return (
    <div className={`bg-slate-800 w-72 h-full fixed top-0 left-0 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="px-6 py-8 text-white flex flex-col items-center">
        
        
        
        <div className="flex justify-between items-center mb-8 w-full">
          <div className="text-2xl font-semibold">{nombre}</div>
          
          {isOpen && (
            <button
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleSidebar}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <img src='/src/assets/image/programador.png' width="160px" className="mx-auto mb-9 m-6" />
        <ul className="space-y-2 w-full">
          <li className="py-2 px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white rounded-md border-b border-gray-700">
                  <Link to="/perfil" className="w-full block">
                    Perfil
                  </Link>
          </li>
          <li onClick={toggleUser} className="py-2 px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white rounded-md border-b border-gray-700">
            Usuarios
            <ul className={`pl-4 transition-all duration-300 ${isUserOpen ? 'block' : 'hidden'}`}>
              <li className="py-2 px-4 cursor-pointer hover:bg-slate-600 hover:text-white rounded-md border-b border-gray-700">                
                <Link to="/perfil" className="w-full block">
                    Perfil
                  </Link></li>
              <li className="py-2 px-4 cursor-pointer hover:bg-slate-600 hover:text-white rounded-md border-b border-gray-700">               
               <Link to="/saldo" className="w-full block">
                    Saldo
                  </Link></li>
              
            </ul>
          </li>
          <li onClick={toggleSettings} className="py-2 px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white rounded-md border-b border-gray-700">
            Creditos
            <ul className={`pl-4 transition-all duration-300 ${isSettingsOpen ? 'block' : 'hidden'}`}>
              <li className="py-2 px-4 cursor-pointer hover:bg-slate-600 hover:text-white rounded-md border-b border-gray-700">               
              <Link to="/universidad" className="w-full block">
                    Universidad
                  </Link></li>
              <li className="py-2 px-4 cursor-pointer hover:bg-slate-600 hover:text-white rounded-md border-b border-gray-700">               
                 <Link to="/autores" className="w-full block">
                   Autores
                  </Link>
                  </li>

            </ul>
          </li>
          <li>

          <a href="/" className="w-full block" 
          onClick={
            (e) => {
                      const confirmLogout = window.confirm('¿Estás seguro de cerrar sesión?');
                      if (!confirmLogout) {
                        e.preventDefault(); // Evita que se recargue la página si el usuario cancela el cierre de sesión
                      }
                  }}
            >
                Cerrar Sesión
            </a>
          </li>
        </ul>
        <div className="mt-8">
          <p className="text-sm text-gray-400">&copy; 2024 Mi App. Todos los derechos reservados FLJ.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
