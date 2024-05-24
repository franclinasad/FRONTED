import React, { useState } from "react";

export const TipoPago = ({ onClose, onYappyClick, onTransferenciaClick, onTargetaClick, onPaypalClick }) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleYappyClick = () => {
    setClosing(true);
    setTimeout(() => {
      onYappyClick();
    }, 500);
  };

  const handleTransferenciaClick = () => {
    setClosing(true);
    setTimeout(() => {
      onTransferenciaClick();
    }, 500);
  };

  const handleTargetaClick = () => {
    setClosing(true);
    setTimeout(() => {
      onTargetaClick();
    }, 500);
  };

  const handlePaypalClick = () => {
    setClosing(true);
    setTimeout(() => {
      onPaypalClick();
    }, 500);
  };

  return (
    <div
      id="modal-backdrop"
      className="absolute top-1/2 left-1/2 w-3/4 h-3/4 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-10"
      onClick={e => e.stopPropagation()}
    >
      <div className={`w-full max-w-6xl bg-gradient-to-br from-blue-600 to-purple-800 border-4 border-blue-300 rounded-xl overflow-hidden shadow-lg relative ${closing ? 'animate-fold' : 'animate-unfold'}`}>
        <button
          className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300"
          onClick={(e) => { e.stopPropagation(); handleClose(); }}
        >
          X
        </button>
        <div className="grid grid-cols-2 gap-4 p-[10rem] text-white">
          <button
            className="bg-blue-900 hover:bg-blue-700 active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-lg p-4 font-bold transition-all duration-300 ease-in-out shadow-lg border border-blue-300 hover:border-blue-500"
            onClick={handleYappyClick}
          >
            YAPPY
          </button>
          <button
            className="bg-blue-900 hover:bg-blue-700 active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-lg p-4 font-bold transition-all duration-300 ease-in-out shadow-lg border border-blue-300 hover:border-blue-500"
            onClick={handleTargetaClick}
          >
            TARJETA DE CREDITO
          </button>
          <button
            className="bg-blue-900 hover:bg-blue-700 active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-lg p-4 font-bold transition-all duration-300 ease-in-out shadow-lg border border-blue-300 hover:border-blue-500"
            onClick={handlePaypalClick}
          >
            PAYPAL
          </button>
          <button
            className="bg-blue-900 hover:bg-blue-700 active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-lg p-4 font-bold transition-all duration-300 ease-in-out shadow-lg border border-blue-300 hover:border-blue-500"
            onClick={handleTransferenciaClick}
          >
            TRANSFERENCIA BANCARIA
          </button>
        </div>
      </div>
    </div>
  );
};
