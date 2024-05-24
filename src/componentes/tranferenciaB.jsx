import React, { useState } from "react";

export const TranferenciaBancaria = ({ onClose,userId  }) => {

  const [unfolding, setUnfolding] = useState(true);
  return (
   

    <div className={`max-w-xl mx-auto my-10 p-6 rounded-lg shadow-lg  ${unfolding ? 'animate-unfold' : 'animate-fold'}`} 
    style={{ background: 'linear-gradient(to bottom right, blue, black)' }}>
 <form action="">
   <fieldset>
     <table className="w-full">
       <tr className="mb-4">
         <td className="py-2 pr-4">
           <label className="block text-right mr-2 font-medium text-white border-b border-gray-300" htmlFor="">Tipo de transferencia:</label>
         </td>
         <td className="py-2">
           <input className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500" type="text" placeholder="Tipo....." />
         </td>
       </tr>
       <tr className="mb-4">
         <td className="py-2 pr-4">
           <label className="block text-right mr-2 font-medium text-white border-b border-gray-300" htmlFor="">Formato de Pago:</label>
         </td>
         <td className="py-2">
           <input className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500" type="text" placeholder="Formato....." />
         </td>
       </tr>
       <tr className="mb-4">
         <td className="py-2 pr-4">
           <label className="block text-right mr-2 font-medium text-white border-b border-gray-300" htmlFor="">Fecha de Emision:</label>
         </td>
         <td className="py-2">
           <input className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500" type="date" placeholder="Fecha....." />
         </td>
       </tr>
       <tr className="mb-4">
         <td className="py-2 pr-4">
           <label className="block text-right mr-2 font-medium text-white border-b border-gray-300" htmlFor="">Persona:</label>
         </td>
         <td className="py-2">
           <input className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500" type="text" placeholder="Persona....." />
         </td>
       </tr>
       <tr className="mb-4">
         <td className="py-2 pr-4">
           <label className="block text-right mr-2 font-medium text-white border-b border-gray-300" htmlFor="">Cuenta Bancaria:</label>
         </td>
         <td className="py-2">
           <input className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500" type="text" placeholder="Cuenta....." />
         </td>
       </tr>
       <tr className="mb-4">
         <td className="py-2 pr-4">
           <label className="block text-right mr-2 font-medium text-white border-b border-gray-300" htmlFor="">Numero de comprobante:</label>
         </td>
         <td className="py-2">
           <input className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500" type="number" placeholder="Numero comprobante....." />
         </td>
       </tr>
       <tr className="mb-4">
         <td className="py-2 pr-4">
           <label className="block text-right mr-2 font-medium text-white border-b border-gray-300" htmlFor="">Descripcion:</label>
         </td>
         <td className="py-2">
           <input className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:border-blue-500" type="text" placeholder="Descripcion....." />
         </td>
       </tr>
     </table>
     <div className="text-center mt-6">
       <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">TRANSFERENCIA</button>
     </div>
   </fieldset>
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