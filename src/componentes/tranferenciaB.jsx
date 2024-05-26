import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClienteService from "../services/ClienteService";

export const TranferenciaBancaria = ({ onClose }) => {

  const [unfolding, setUnfolding] = useState(true);

  const [pedido, setPedido] = useState("");
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState(""); // 'success' or 'error'

  const { id } = useParams();
  const navigate = useNavigate();

  const saveOrUpdateCliente = (e) => {
    e.preventDefault();
    const cliente = {
      pedido,
      monto,
      fecha,
      metodo: { idmetodo: 3 } // Aqui es para el idmetodo limber
    };

    ClienteService.createCliente(cliente)
      .then((response) => {
        console.log(response.data);
        setModalMessage("Transferencia exitosa");
        setModalType("success");
        setShowModal(true);
      })
      .catch((error) => {
        console.error(error);
        setModalMessage("Error al realizar la transferencia");
        setModalType("error");
        setShowModal(true);
      });
  };

  const handleButtonClick = (e) => {
    // Validación de campos
    if (!pedido || !monto || !fecha) {
      setModalMessage("Por favor, completa todos los campos.");
      setModalType("error");
      setShowModal(true);
      return;
    }

    // Si todos los campos están llenos, procedemos con la transferencia
    saveOrUpdateCliente(e);
  };

  return (
    <div
      className={`max-w-[70rem] mx-auto my-10 p-6 rounded-lg shadow-lg ${unfolding ? 'animate-unfold' : 'animate-fold'}`}
      style={{ background: "linear-gradient(to bottom right, blue, black)" }}
    >
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className={`bg-white p-6 rounded-lg shadow-lg border ${modalType === 'success' ? 'border-green-500' : 'border-red-500'}`}>
            <h2 className={`text-2xl ${modalType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {modalMessage}
            </h2>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      <form>
        <table className="w-full">
          <tbody>

            <div className="flex gap-7">

            <div>
            <tr className="mb-4">
              <td className="py-2 pr-4">
                <label
                  className="block text-right mr-2 font-medium text-white border-b border-gray-300"
                  htmlFor="nombre"
                >
                  Nombre o razón social:
                </label>
              </td>
              <td className="py-2">
                <input
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500"
                  type="text"
                  placeholder="Nombre..."
                />
              </td>
            </tr>
            <tr className="mb-4">
              <td className="py-2 pr-4">
                <label
                  className="block text-right mr-2 font-medium text-white border-b border-gray-300"
                  htmlFor="documento"
                >
                  Documento de identidad:
                </label>
              </td>
              <td className="py-2">
                <input
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500"
                  type="text"
                  placeholder="Documento de identidad..."
                />
              </td>
            </tr>
            <tr className="mb-4">
              <td className="py-2 pr-4">
                <label
                  className="block text-right mr-2 font-medium text-white border-b border-gray-300"
                  htmlFor="telefono"
                >
                  Teléfono de contacto:
                </label>
              </td>
              <td className="py-2">
                <input
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500"
                  type="text"
                  placeholder="Teléfono de contacto..."
                />
              </td>
            </tr>
            <tr className="mb-4">
              <td className="py-2 pr-4">
                <label
                  className="block text-right mr-2 font-medium text-white border-b border-gray-300"
                  htmlFor="email"
                >
                  Correo electrónico:
                </label>
              </td>
              <td className="py-2">
                <input
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500"
                  type="email"
                  placeholder="Correo..."
                />
              </td>
            </tr>
            </div>



            <div>

            <tr className="mb-4">
              <td className="py-2 pr-4">
                <label
                  className="block text-right mr-2 font-medium text-white border-b border-gray-300"
                  htmlFor="cuentaOrigen"
                >
                  Cuenta de origen:
                </label>
              </td>
              <td className="py-2">
                <input
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500"
                  type="text"
                  placeholder="Cuenta de origen..."
                />
              </td>
            </tr>




            <tr className="mb-4">
              <td className="py-2 pr-4">
                <label
                  className="block text-right mr-2 font-medium text-white border-b border-gray-300"
                  htmlFor="pedido"
                >
                  Pedido:
                </label>
              </td>
              <td className="py-2">
                <input
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500"
                  type="text"
                  placeholder="Pedido..."
                  value={pedido}
                  onChange={(e) => setPedido(e.target.value)}
                />
              </td>
            </tr>
            <tr className="mb-4">
              <td className="py-2 pr-4">
                <label
                  className="block text-right mr-2 font-medium text-white border-b border-gray-300"
                  htmlFor="monto"
                >
                  Monto:
                </label>
              </td>
              <td className="py-2">
                <input
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500"
                  type="number"
                  placeholder="Monto..."
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                />
              </td>
            </tr>
            <tr className="mb-4">
              <td className="py-2 pr-4">
                <label
                  className="block text-right mr-2 font-medium text-white border-b border-gray-300"
                  htmlFor="fecha"
                >
                  Fecha:
                </label>
              </td>
              <td className="py-2">
                <input
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500"
                  type="date"
                  placeholder="Fecha..."
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </td>
            </tr>
           
            </div>

            </div>



          
            
          </tbody>
        </table>
        <div className="text-center mt-6">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            type="button"
            onClick={(e) => handleButtonClick(e)}
          >
            TRANSFERENCIA
          </button>
        </div>
      </form>

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
