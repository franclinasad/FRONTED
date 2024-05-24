import React, { useState } from "react";

export const Paypal = ({ onClose, userId }) => {
  const [unfolding, setUnfolding] = useState(true);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [description, setDescription] = useState('');

  const handlePayment = () => {
    // Aquí puedes añadir la lógica para manejar el pago, por ejemplo, llamando a una API de PayPal
    console.log('Iniciando pago con los siguientes detalles:');
    console.log('Monto:', amount);
    console.log('Moneda:', currency);
    console.log('Descripción:', description);
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
      <br />
      <div>
        <label
          className="block text-center text-white border-b-4 white font-sans font-bold text-2xl"
          htmlFor=""
        >
          PAYPAL
        </label>
      </div>

      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="amount">
            Monto
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 rounded border"
            placeholder="Monto a pagar"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="currency">
            Moneda
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 rounded border"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">Bs</option>
            {/* Añade más opciones según sea necesario */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded border"
            placeholder="Descripción del producto"
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
