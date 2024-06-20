import React, { useState, useEffect } from "react";
import ofertasServicio from "../services/ofertasServicio";
import DetalleProductoServicio from "../services/DetalleProductoServicio";
import DescripcionOfertas from "./DescripcionOfertas";

export const Ofertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const [selectedOferta, setSelectedOferta] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    ofertasServicio.getAllOfertas()
      .then(response => {
        setOfertas(response.data);
      })
      .catch(error => {
        console.log("Error al obtener ofertas", error);
      });
  }, []);

  const handleImageClick = (oferta) => {
    setSelectedOferta(oferta);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCloseModal = () => {
    setSelectedOferta(null);
  };

  const handleAgregarCarrito = (producto, oferta) => {
    const precioDescuento = producto.precio - (producto.precio * (oferta.descuento / 100));
    const detalleProducto = {
      cantidad: 1,
      precioUnitario: precioDescuento,
      productos: producto // Ajusta esto según la estructura esperada por tu backend
    };

    DetalleProductoServicio.createDetalleProducto(detalleProducto)
      .then(response => {
        console.log("Detalle de producto agregado al carrito:", response.data);
      })
      .catch(error => {
        console.error("Error al agregar detalle de producto al carrito", error);
      });
  };

  const filteredOfertas = ofertas.filter(oferta =>
    oferta.productos.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Ofertas Especiales</h1>
        <input
          type="text"
          placeholder="Buscar productos en oferta"
          className="p-2 rounded"
          value={searchTerm}
          onChange={handleSearch}
        />
      </header>
      <main className="flex-grow overflow-y-auto">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mt-8 mb-4">Productos en Oferta</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredOfertas.map(oferta => {
              const producto = oferta.productos;
              const precioConDescuento = (producto.precio - (producto.precio * (oferta.descuento / 100))).toFixed(2);
              return (
                <div key={producto.idproductos} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="cursor-pointer" onClick={() => handleImageClick(oferta)}>
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-2">
                    <div className="flex items-center mt-4">
                          <div className="inline-block bg-red-500 text-white font-bold p-2 rounded">
                            {oferta.descuento}%
                          </div>
                            <h3 className="text-red-md font-semibold mt-2">  {oferta.descripcion}</h3>

                      </div>
                      <div className="flex items-center mt-4">
                        <p className="text-black-600 font-bold text-lg mr-2">{precioConDescuento} $</p>
                        <p className="text-gray-900 font-bold line-through text-xs">{producto.precio} $</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="bg-blue-600 p-4 text-white text-center">
        Derechos reservados &copy; 2024
      </footer>
      {selectedOferta && (
        <DescripcionOfertas
          oferta={selectedOferta}
          onClose={handleCloseModal}
          onAgregarAlCarrito={handleAgregarCarrito}
        />
      )}
    </div>
  );
};

export default Ofertas;
