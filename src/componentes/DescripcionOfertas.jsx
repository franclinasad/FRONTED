import React from "react";

const DescripcionOfertas = ({ oferta, onAgregarAlCarrito, onClose }) => {
  if (!oferta) return null;

  const { productos, descripcion, descuento, fechaInicio, fechaFin } = oferta;
  const { nombre, descripcion: prodDescripcion, precio, imagen } = productos;

  const handleAgregarAlCarrito = () => {
    onAgregarAlCarrito(productos, oferta);
    onClose(); // Cerrar el modal después de agregar al carrito
  };

  // Función para generar estrellas aleatorias
  const generarEstrellas = () => {
    const numEstrellas = Math.floor(Math.random() * 5) + 1; // Genera un número aleatorio entre 1 y 5
    const estrellas = [];
    for (let i = 0; i < numEstrellas; i++) {
      estrellas.push(<span key={i} className="text-yellow-500 text-xl">&#9733;</span>);
    }
    return estrellas;
  };

  // Calcular el precio con descuento
  const precioConDescuento = (precio - (precio * (descuento / 100))).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-3/4 md:w-2/3 lg:w-1/2 p-4 flex">
        <div className="w-1/2">
          <img
            src={imagen}
            alt={nombre}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2 px-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{nombre}</h2>
              <button onClick={onClose} className="text-black text-xl">&times;</button>
            </div>
            <div className="mt-2 flex">
              {generarEstrellas()}
            </div>
            <p className="mt-4 text-gray-700">{prodDescripcion}</p>
            <div className="mt-4 flex items-center">
              <p className="text-black-600 font-extrabold text-xl mr-2">${precioConDescuento}</p>
              <p className="text-gray-900 font-bold line-through text-lg">${precio}</p>
            </div>
            <div className="inline-block bg-red-500 text-white font-bold p-2 rounded mt-2">
              ({descuento}% de descuento)
            </div>
            
            <h3 className="text-md font-semibold mt-2">{descripcion}</h3>
            <p>Desde: {new Date(fechaInicio).toLocaleDateString()}</p>
            <p>Hasta: {new Date(fechaFin).toLocaleDateString()}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button onClick={handleAgregarAlCarrito} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
              Agregar al carrito
            </button>
            <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescripcionOfertas;

