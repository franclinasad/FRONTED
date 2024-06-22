import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { TipoPago } from "./tipoPago";
import { PagoYappy } from "./yappy";
import { TranferenciaBancaria } from "./tranferenciaB";
import { TargetaCredito } from "./TargetaCredito";
import { Paypal } from "./Paypal";

export const ServicioCliente = ({ userId, nombre }) => {
  const [showPaymentType, setShowPaymentType] = useState(false);
  const [showPagoYappy, setShowPagoYappy] = useState(false);
  const [showTransferencia, setShowTransferencia] = useState(false);
  const [showTargeta, setShowTargeta] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);

  const location = useLocation();
  const { totalPedido } = location.state || {};

  /* para el componente yappy */

  const handleShowPagoYappy = () => {
    setShowPaymentType(false);
    setTimeout(() => {
      setShowPagoYappy(true);
    }, 500); // Coincide con la duración de la animación de cierre
  };

  const handleClosePagoYappy = () => {
    setShowPagoYappy(false);
    setTimeout(() => {
      setShowPaymentType(true);
    }, 500); // Coincide con la duración de la animación de cierre
  };

  /*  para el componente de transferenciaB */
  const handleShowTransferencia = () => {
    setShowPaymentType(false);
    setTimeout(() => {
      setShowTransferencia(true);
    }, 500);
  };

  const handleCloseTransferencia = () => {
    setShowTransferencia(false);
    setTimeout(() => {
      setShowPaymentType(true);
    }, 500);
  };

  //targeta

  const handleShowTargeta = () => {
    setShowPaymentType(false);
    setTimeout(() => {
      setShowTargeta(true);
    }, 500);
  };

  const handleCloseTargeta = () => {
    setShowTargeta(false);
    setTimeout(() => {
      setShowPaymentType(true);
    }, 500);
  };

  const handleShowPaypal = () => {
    setShowPaymentType(false);
    setTimeout(() => {
      setShowPaypal(true);
    }, 500);
  };

  const handleClosePaypal = () => {
    setShowPaypal(false);
    setTimeout(() => {
      setShowPaymentType(true);
    }, 500);
  };

  console.log(nombre);
  console.log(userId);
  console.log(totalPedido);

  return (
    <div className="relative pt-20 text-center h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-600 animate-gradient-x">
      <p className="text-5xl text-white my-4 mx-auto transition-colors duration-500 ease-in-out hover:text-gray-200">
        Te damos la Bienvenida al Servicio al Cliente, {nombre}
      </p>
      {!showPagoYappy && !showTransferencia && !showTargeta && !showPaypal && (
        <button
          className="relative text-4xl overflow-hidden bg-white text-blue-800 py-3 px-6 rounded-lg font-bold border-l-4 border-r-4 border-transparent transition-all duration-300 ease-in-out transform hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => setShowPaymentType(true)}
        >
          TIPO DE PAGO
        </button>
      )}
      {showPaymentType && (
        <TipoPago
          onClose={() => setShowPaymentType(false)}
          onYappyClick={handleShowPagoYappy}
          onTransferenciaClick={handleShowTransferencia}
          onTargetaClick={handleShowTargeta}
          onPaypalClick={handleShowPaypal}
        />
      )}
      {showPagoYappy && <PagoYappy onClose={handleClosePagoYappy} userId={userId} totalPedido={totalPedido} />}
      {showTransferencia && <TranferenciaBancaria onClose={handleCloseTransferencia} userId={userId} totalPedido={totalPedido} />}
      {showTargeta && <TargetaCredito onClose={handleCloseTargeta} userId={userId} totalPedido={totalPedido} />}
      {showPaypal && <Paypal onClose={handleClosePaypal} userId={userId} totalPedido={totalPedido} />}
    </div>
  );
};

export default ServicioCliente;
