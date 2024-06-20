import React from 'react';

const Autores = ({ userId }) => {
  const autores = ["John Limber Illimani Choqueta", "Limber Mamani Canaza", "Ruddy Franklin Vargas Choque"];

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-blue-600 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-50 mb-6">Autores</h1>
      <div className="flex justify-center">
        <ul className="space-y-2">
          {autores.map((autor, index) => (
            <li key={index} className="text-lg font-medium text-gray-100">{autor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Autores;
