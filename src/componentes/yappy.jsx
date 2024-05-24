import React, { useState } from "react";
import QR from "../assets/image/QR.jpg";

export const PagoYappy = ({ onClose,userId  }) => {
  const [unfolding, setUnfolding] = useState(true);

  return (
    <div
      className={`my-10 max-w-xl mx-auto p-6 bg-blue-800 rounded-lg justify-center ${unfolding ? 'animate-unfold' : 'animate-fold'}`}
      style={{ background: "linear-gradient(to bottom right, blue, black)" }}
    >
      <div>
        <div className="h-[20rem] w-[20rem] mx-auto">
          <img
            className="w-[100%] h-[100%] object-contain rounded-full border border-x-8"
            src={QR}
            alt="pago de YAPPY"
          />
        </div>
      </div>
      <br />
      <div>
        <label
          className="block text-center text-white border-b-4 white font-sans font-bold text-2xl"
          htmlFor=""
        >
          YAPPY
        </label>
      </div>
      <button
        className="mt-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300"
        onClick={() => {
          setUnfolding(false);
          setTimeout(onClose, 500); // Coincide con la duración de la animación de cierre
        }}
      >
        Cerrar
      </button>
    </div>
  );
};
