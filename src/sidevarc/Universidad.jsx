import React from 'react';

const Universidad = ({ userId }) => {
  const universidadInfo = {
    nombre: "Universidad Pública de El Alto",
    agradecimientos: "Agradecimientos a la Universidad Pública de El Alto por su dedicación a la educación y formación de profesionales competentes.",
    vision: "Ser una universidad líder en la formación integral de profesionales, con excelencia académica, científica y humanística, comprometida con el desarrollo sostenible de la sociedad.",
    mision: "Formar profesionales críticos, creativos y comprometidos con la transformación social, mediante una educación de calidad, investigación innovadora y vinculación efectiva con la sociedad."
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg text-white">
      <div className="flex justify-center mb-6 space-x-4">
        <img src='/src/assets/image/logoUpea.png' width="130px" alt="Logo UPEA"/>
        <img src='/src/assets/image/ingenieria_sistemas.png' width="100px" alt="Logo Ingeniería de Sistemas"/>
      </div>
      <h1 className="text-2xl font-bold text-center mb-6">Agradecimientos</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{universidadInfo.nombre}</h2>
        <p className="mb-4">{universidadInfo.agradecimientos}</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Visión</h2>
        <p>{universidadInfo.vision}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Misión</h2>
        <p>{universidadInfo.mision}</p>
      </div>
    </div>
  );
};

export default Universidad;
