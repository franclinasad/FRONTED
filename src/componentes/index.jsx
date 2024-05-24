import React, { useState, useEffect } from "react";
import Uno from "../assets/image/1.jpg";
import Dos from "../assets/image/2.jpg";
import Tres from "../assets/image/3.jpg";
import Cuatro from "../assets/image/4.jpg";
import Cinco from "../assets/image/5.jpg";
import Seis from "../assets/image/fondo.jpg";

export const Inicio = () => {
  // Array de imágenes
  const images = [Uno, Dos, Tres, Cuatro, Cinco, Seis];
  // Estado para manejar la imagen actual
  const [currentImage, setCurrentImage] = useState(0);
  // Estado para manejar la animación
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideOut(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setSlideOut(false);
      }, 1000); // Tiempo para coincidir con la duración de 'leave'
    }, 5000); // Cambiar imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" min-h-screen main-container h-screen  relative">
      <div className={`overflow-hidden h-full`}>
        {/* Imagen actual */}
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-1000 ${
            slideOut ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></div>
        {/* Siguiente imagen para transición suave */}
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-1000 ${
            slideOut ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${images[(currentImage + 1) % images.length]})`,
          }}
        ></div>
        {/* Contenedor con scroll */}
        <div className="absolute inset-0 w-full h-full overflow-y-auto">
          <style>
            {`::-webkit-scrollbar { display: none; }`} {/* Esto es para navegadores basados en WebKit como Chrome y Safari */}
          </style>
          <div className="container1 grid grid-cols-3 place-items-center gap-4">
            <div className="card">1</div>
            <div className="card">2</div>
            <div className="card">3</div>
            <div className="card">4</div>
            <div className="card">5</div>
            <div className="card">6</div>
            <div className="card">7</div>
            <div className="card">8</div>
            <div className="card">9</div>
            <div className="card">10</div>
            <div className="card">11</div>
            <div className="card">12</div>
          </div>
        </div>
      </div>
    </div>
  );
};
