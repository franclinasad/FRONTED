import React, { useState, useEffect, useRef } from "react";
import Uno from "../assets/image/1.jpg";
import Dos from "../assets/image/2.jpg";
import Tres from "../assets/image/3.jpg";
import Cuatro from "../assets/image/4.jpg";
import Cinco from "../assets/image/5.jpg";
import Seis from "../assets/image/fondo.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Inicio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

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

  const handleScroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  const carouselRef = useRef(null);

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
            backgroundImage: `url(${
              images[(currentImage + 1) % images.length]
            })`,
          }}
        ></div>
        {/* Contenedor con scroll */}
        <div className="absolute inset-0 w-full h-full overflow-y-auto">
          <style>
            {`::-webkit-scrollbar { display: none; }`}{" "}
            {/* Esto es para navegadores basados en WebKit como Chrome y Safari */}
          </style>
          <div className="container1 grid grid-cols-4 place-items-center ">
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Case de computadoras</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>

            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Componentes</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://m.media-amazon.com/images/I/41YDP4L7PoL._AC_SY230_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Laptop Core i7</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://m.media-amazon.com/images/I/71uuMO6PstL._AC_SY110_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Laptop Hp</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://m.media-amazon.com/images/I/716ViaLJyqL._AC_SY200_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Laptop para oficina</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Laptop Gaming</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1546843_2940864_379x304_1X_en_US._SY304_CB613273467_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Ryzen 7</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://images-na.ssl-images-amazon.com/images/I/81UN2xsgdML._AC_UL165_SR165,165_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Escolares</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://images-na.ssl-images-amazon.com/images/I/61L-4+GEtPL._AC_UL165_SR165,165_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Case</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Desktops._SY116_CB558654384_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Tablets</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Moviles</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY160_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <h2 className="font-bold text-2xl">Core i5</h2>
                <img
                  className="h-[17rem] w-[19rem]"
                  src="https://m.media-amazon.com/images/I/71pTP-ll4sL._AC_SY110_.jpg"
                  alt=""
                />
                <button className="text-blue-400 hover:text-orange-300 cursor-pointer">
                  Comprar ahora
                </button>
              </div>
            </div>

            <div className="grid col-span-4 ">
              <div className="bg-white h-[25rem] w-[89rem] rounded-2xl relative px-7  pl-[6rem]">
                <h2 className="text-2xl font-bold mb-6 mt-6 mx-auto">Artículos</h2>
                <Slider {...settings}>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71zQFoKg2ZL._AC_SY200_.jpg"
                      alt="Producto 1"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71RVbVY2xzL._AC_SY200_.jpg"
                      alt="Producto 2"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/7190HrzZe7L._AC_SY200_.jpg"
                      alt="Producto 3"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71zQFoKg2ZL._AC_SY200_.jpg"
                      alt="Producto 1"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71RVbVY2xzL._AC_SY200_.jpg"
                      alt="Producto 2"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/7190HrzZe7L._AC_SY200_.jpg"
                      alt="Producto 3"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71zQFoKg2ZL._AC_SY200_.jpg"
                      alt="Producto 1"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71RVbVY2xzL._AC_SY200_.jpg"
                      alt="Producto 2"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/7190HrzZe7L._AC_SY200_.jpg"
                      alt="Producto 3"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71zQFoKg2ZL._AC_SY200_.jpg"
                      alt="Producto 1"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71RVbVY2xzL._AC_SY200_.jpg"
                      alt="Producto 2"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/7190HrzZe7L._AC_SY200_.jpg"
                      alt="Producto 3"
                      className="w-[20rem] h-[15rem]"
                    />
                  </div>
                  
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
