import React, { useState, useEffect } from "react";
import ProductoServicio from "../services/ProductoServicio";
import DescripcionProducto from "./DescripcionProducto";
import { Link } from "react-router-dom";
import DetalleProductoServicio from "../services/DetalleProductoServicio";
import ImagenesPanel from "./ImagenesPanel"; // Importar el componente de imágenes

export const Pedidos = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    ProductoServicio.getAllProductos()
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.log("Error al obtener productos", error);
      });
  }, []);

  const handleImageClick = (producto) => {
    setSelectedProducto(producto);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCloseModal = () => {
    setSelectedProducto(null);
  };

  const handleAgregarCarrito = (producto) => {
    const detalleProducto = {
      cantidad: 1,
      precioUnitario: producto.precio,
      productos: producto
    };

    DetalleProductoServicio.createDetalleProducto(detalleProducto)
      .then(response => {
        console.log("Detalle de producto agregado al carrito:", response.data);
      })
      .catch(error => {
        console.error("Error al agregar detalle de producto al carrito", error);
      });
  };

  const filteredProducts = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 p-4 text-black flex justify-between items-center">
        <h1 className="text-xl font-bold">Pedidos Destacados</h1>
        <div className="flex flex-grow justify-center items-center">
          <input
            type="text"
            placeholder="Buscar productos"
            className="p-2 rounded"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </header>
      
      {/* Panel de imágenes */}
      <ImagenesPanel />
      
      <main className="flex-grow overflow-y-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(producto => (
              <div key={producto.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="cursor-pointer" onClick={() => handleImageClick(producto)}>
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    {producto.categorias && (
                      <>
                        <h3 className="text-md font-semibold mt-2">{producto.categorias.nombre}</h3>
                        <p className="text-gray-600">{producto.categorias.descripcion}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <footer className="bg-blue-600 p-4 text-white text-center">
        Derechos reservados &copy; 2024
      </footer>
      
      {selectedProducto && (
        <DescripcionProducto
          producto={selectedProducto}
          onClose={handleCloseModal}
          onAddToCart={handleAgregarCarrito}
        />
      )}
    </div>
  );
};

export default Pedidos;
