import React, { useState } from "react";
import { TipoPago } from './tipoPago';

export const ServicioCliente = () => {
  const [showPaymentType, setShowPaymentType] = useState(false);

  return (
    <div className="relative pt-20 text-center h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-600 animate-gradient-x">
      <p className="text-5xl text-white my-4 mx-auto transition-colors duration-500 ease-in-out hover:text-gray-200">
        Te damos la Bienvenida al Servicio al Cliente, John
      </p>
      <button
        className="relative text-4xl overflow-hidden bg-white text-blue-800 py-3 px-6 rounded-lg font-bold border-l-4 border-r-4 border-transparent transition-all duration-300 ease-in-out transform hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={() => setShowPaymentType(true)}
      >
        TIPO DE PAGO
      </button>
      {showPaymentType && <TipoPago onClose={() => setShowPaymentType(false)} />}
    </div>
  );
};
