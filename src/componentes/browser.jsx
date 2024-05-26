import React from "react";



const Repeticiones = ({count,texto})=> {

  const repeatedDivs = [];

  // Iteramos según el valor de count para agregar los divs repetidos al array
  for (let i = 0; i < count; i++) {
    repeatedDivs.push(
      <div key={i} className="flex bg-transparent w-[65rem] h-[20.1rem] mt-4  shadow-2xl">
        <div className="w-[30rem] h-[20rem] bg-white">
          <img className="w-[100%] h-[100%] object-scale-down" src="https://m.media-amazon.com/images/I/71zQFoKg2ZL._AC_UY327_FMwebp_QL65_.jpg" alt="laptop" />
        </div>
        <div className="bg-[#DDDEE1] p-4 border-black w-[100%] h-[20rem]">
          <p className="font-bold hover:text-orange-400">
            jumper Computadora portátil, pantalla FHD IPS 16:10 de 16 pulgadas, CPU Intel Celeron 
            Quad Core, 4 GB LPDDR4 RAM 128 GB de almacenamiento, Office 365 suscripción de 1...
          </p>
          <p className="pb-2">Opciones: 2 capacidades</p>
          <span className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
              <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
              <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
              <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
              <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>  
            <span className="text-blue-600 pl-2">22</span>
          </span>
          <span>500+ comprados el mes pasado</span><br />
          <span>
            <sup>US$</sup> <span className="text-[1.5rem]">199</span> <sup>99</sup>  Típico<del>US$1,299.9</del>
          </span>
          <span className=""><br />
            <span className="bg-green-500 px-2">Ahora 8 %</span> con cupon
          </span><br />
          <span>Enrtega al mar, 4 de jun</span><br />
          <span className="text-1">
            Se envia a $Bolivia
          </span><br />
          <button className="mt-3 rounded-2xl bg-yellow-300 px-3 py-1">
            {texto}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>{repeatedDivs}</div>
  )
}

export const Browser = ()=>{

    return (
      <div className="flex bg-gray-300 justify-center h-screen  overflow-scroll  "
      style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
      >

        <Repeticiones count={5} texto={"Agregar al carrito"}/>
      </div>

    )
}