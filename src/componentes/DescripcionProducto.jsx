import React from "react";

const DescripcionProducto = ({ producto, onClose, onAddToCart }) => {
  if (!producto) return null;

  const handleAddToCart = () => {
    onAddToCart(producto);
    onClose();
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-3/4 md:w-2/3 lg:w-1/2 p-4 flex">
        <div className="w-1/2">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2 px-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{producto.nombre}</h2>
              <button onClick={onClose} className="text-black text-xl">&times;</button>
            </div>
            <p className="mt-4 text-gray-700">{producto.descripcion}</p>
            <p className="mt-4 text-gray-900 font-bold">${producto.precio}</p>
            <div className="mt-2 flex">
              {generarEstrellas()}
            </div>
            {producto.categorias && (
              <div className="mt-4">
                <h3 className="text-md font-semibold">Categoría</h3>
                <p className="text-gray-600"> {producto.categorias.nombre}</p>
                <p className="text-gray-600"> {producto.categorias.descripcion}</p>
              </div>
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
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

export default DescripcionProducto;
