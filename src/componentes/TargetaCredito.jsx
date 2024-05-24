import React, { useState } from "react";

export const TargetaCredito = ({ onClose, userId }) => {
  const [unfolding, setUnfolding] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handlePayment = () => {
    // Aquí puedes añadir la lógica para manejar el pago con tarjeta de crédito
    console.log('Iniciando pago con los siguientes detalles:');
    console.log('Número de Tarjeta:', cardNumber);
    console.log('Fecha de Vencimiento:', expiryDate);
    console.log('CVV:', cvv);
    console.log('Nombre del Titular:', cardholderName);
    console.log('User ID:', userId);

    // Simula una llamada de pago y cierra el modal después de un retraso
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

      </div>
      <br />
      <div>
        <label
          className="block text-center text-white border-b-4 white font-sans font-bold text-2xl"
          htmlFor=""
        >
          TARJETA DE CRÉDITO
        </label>
      </div>

      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="cardNumber">
            Número de Tarjeta
          </label>
          <input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 rounded border"
            placeholder="Número de Tarjeta"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="expiryDate">
            Fecha de Vencimiento
          </label>
          <input
            id="expiryDate"
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full p-2 rounded border"
            placeholder="MM/AA"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="cvv">
            CVV
          </label>
          <input
            id="cvv"
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full p-2 rounded border"
            placeholder="CVV"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="cardholderName">
            Nombre del Titular
          </label>
          <input
            id="cardholderName"
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            className="w-full p-2 rounded border"
            placeholder="Nombre del Titular"
          />
        </div>
      </form>

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
