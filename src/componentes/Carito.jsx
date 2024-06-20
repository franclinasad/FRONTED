import React, { useState, useEffect } from "react";
import DetalleProductoServicio from "../services/DetalleProductoServicio";
import { Link } from "react-router-dom";

export const Carito = () => {
  const [detallesCarrito, setDetallesCarrito] = useState([]);
  const [error, setError] = useState(null);
  const [totalPedido, setTotalPedido] = useState(0); // Estado para el total del pedido
  const [fechaPedido, setFechaPedido] = useState(""); // Estado para la fecha del pedido

  useEffect(() => {
    const fetchDetallesCarrito = async () => {
      try {
        const response = await DetalleProductoServicio.getAllDetalleProducto();
        setDetallesCarrito(response.data);

        // Calcular el total del pedido al cargar los detalles del carrito
        const total = response.data.reduce((accumulator, detalle) => {
          return accumulator + detalle.precioUnitario * detalle.cantidad;
        }, 0);
        setTotalPedido(total.toFixed(2)); // Redondeamos a 2 decimales
      } catch (error) {
        setError("Error al obtener detalles del carrito");
      }
    };

    fetchDetallesCarrito();
  }, []);

  useEffect(() => {
    // Obtener la fecha actual y formatearla como String (YYYY-MM-DD)
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setFechaPedido(formattedDate);
  }, []);

  const handleDelete = async (id) => {
    try {
      await DetalleProductoServicio.deleteDetalleProducto(id);
      setDetallesCarrito(detallesCarrito.filter(detalle => detalle.idDetallePedido !== id));
    } catch (error) {
      console.error("Error al eliminar detalle de producto", error);
      setError("Error al eliminar detalle de producto");
    }
  };

  const handleComprarTodo = async () => {
    // Crear el objeto de pedido a enviar al backend
    const pedido = {
      fechaPedido: fechaPedido,
      estado: "Pendiente",
      total: totalPedido,
      detalleProducto: detallesCarrito.map(detalle => detalle.idDetallePedido).join(", ") // Obtener IDs como string separados por coma
    };

    // Lógica para enviar el pedido al backend (usando axios o fetch)
    console.log("Pedido a enviar:", pedido);

    // Aquí deberías llamar al servicio para guardar el pedido en la base de datos
    // y manejar la lógica correspondiente en tu aplicación
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Detalles del Carrito</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleComprarTodo}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        ><Link to="/servicio-al-cliente">
         Comprar Todo      
        </Link>
        </button>
      </div>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="container mx-auto">
        {detallesCarrito.map((detalle) => (
          <div key={detalle.idDetallePedido} className="bg-white shadow-md rounded-lg p-4 mb-6 flex">
            <img
              src={detalle.productos.imagen}
              alt={detalle.productos.nombre}
              className="w-1/4 h-auto object-cover rounded-md mr-4"
            />
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold mb-2">{detalle.productos.nombre}</h2>
              <p className="text-gray-600 mb-1">Descripción: {detalle.productos.descripcion}</p>
              <p className="text-gray-800 mb-1 font-bold">Precio Unitario: ${detalle.precioUnitario}</p>
              <p className="text-gray-800 mb-4">Cantidad: {detalle.cantidad}</p>
              <div className="flex space-x-4">
                <Link to="/servicio-al-cliente" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Comprar Producto
                </Link>
                <button
                  onClick={() => handleDelete(detalle.idDetallePedido)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar Producto
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end mt-4">
          <p className="text-gray-800 font-bold">Total del Pedido: ${totalPedido}</p>
        </div>
      </div>
    </div>
  );
};

export default Carito;
