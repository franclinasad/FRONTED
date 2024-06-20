import React, { useState, useEffect } from "react";
import ProductoServicio from "../services/ProductoServicio";

const ImagenesPanel = () => {
  const [productos, setProductos] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Función para cargar los productos
    const cargarProductos = async () => {
      try {
        const response = await ProductoServicio.getAllProductos();
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener productos para el panel de imágenes", error);
      }
    };

    cargarProductos();
    
    // Intervalo para cambiar las imágenes cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === productos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [productos]);

  return (
    <div className="bg-gray-200 p-4 mb-4 rounded-lg shadow-md flex items-center">
      {productos.length > 0 && (
        <>
          <img
            src={productos[currentImageIndex].imagen}
            alt={productos[currentImageIndex].nombre}
            className="w-1/5 h-auto object-cover rounded-lg"
            style={{ maxHeight: "300px" }} // Ajustar el tamaño máximo de la imagen
          />
          <div className="ml-4 w-2/3">
            <h2 className="text-2xl font-bold">{productos[currentImageIndex].nombre}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default ImagenesPanel;
