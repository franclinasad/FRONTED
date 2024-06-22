import React, { useState } from "react";
import UsuarioServices from "../services/UsuarioServices";

export const TargetaCredito = ({ onClose, userId, totalPedido }) => {
  const [unfolding, setUnfolding] = useState(true);

  const handlePayment = async () => {
    try {
      await UsuarioServices.descontarSaldoUsuario(userId, totalPedido);
      console.log("Saldo descontado correctamente.");
    } catch (error) {
      console.error("Error al descontar saldo:", error);
      // Manejo de errores
    }

    setTimeout(() => {
      setUnfolding(false);
      setTimeout(onClose, 500);
    }, 1000);
  };

  return (
    <div
      className={`my-10 max-w-xl mx-auto p-6 bg-blue-800 rounded-lg justify-center ${unfolding ? 'animate-unfold' : 'animate-fold'}`}
      style={{ background: "linear-gradient(to bottom right, blue, black)" }}
    >
      <div>
        <label
          className="block text-center text-white border-b-4 white font-sans font-bold text-2xl"
          htmlFor=""
        >
          TARJETA DE CRÉDITO
        </label>
      </div>

      <h1>${totalPedido}</h1>

      <div className="flex justify-between mt-4">
        <button
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300"
          onClick={() => {
            setUnfolding(false);
            setTimeout(onClose, 500);
          }}
        >
          Cerrar
        </button>

        <button
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
          onClick={handlePayment}
        >
          Pagar
        </button>
      </div>
    </div>
  );
};
