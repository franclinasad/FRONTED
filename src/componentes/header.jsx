import React from "react";
import Logo from "../assets/image/OIG1.jpeg";
import { Link } from "react-router-dom";

export const Header = ({ onChangeActiveComponent,userId,toggleSidebar  }) => {

  return (
    <div className="header">
      <header>
        <div className="">
          <nav className="h-uno">
            <div>
              <Link to="/inicio">
              <button onClick={() => onChangeActiveComponent("Inicio")}>
                <img className="logo" src={Logo} alt="FLJ" />
              </button>
              </Link>
              
            </div>
            <input
              className="h-input"
              type="text"
              placeholder="Buscar DigitalDreams(FLJ)"
            />
            <button className="h-button">
              <img src="" alt="" />
              <svg
                className="h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>

            <li>
             <Link to="/pedidos">
                <button
                    className=" h-10 object-contain border-b-2 border-r-2 border-red-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out group hover:bg-blue-500/50 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => onChangeActiveComponent("ComponentPedidos")}
                  >
                    <span class="block relative z-10 text-[0.8rem]">PEDIDOS</span>
                  </button>
             </Link>
            </li>

            <li>
              <Link to="/carrito">
              <button
                className=" h-10   border-b-2 border-r-2 border-red-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out group hover:bg-blue-500/50 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => onChangeActiveComponent("ComponentPedidos")}
              >
                <span class="block relative z-10 text-[0.8rem]  ">
                  <svg
                    class="w-6 h-6 mr-2 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 16h10l1.2-3H7.2l1.8 3zM1 1h4l2.6 12h13l-1.35-3H6.4M17 16a2 2 0 11-4 0 2 2 0 014 0zM6 16a2 2 0 11-4 0 2 2 0 014 0zM18 6h-6"
                    ></path>
                  </svg>
                  CARRITO
                </span>
              </button>
              </Link>
            </li>
          </nav>
        </div>
        <div className="">
          <nav>
            <ul className="h-dos">
              <li>
   
                <button className="h-button2" onClick={toggleSidebar}>
                  <span className="h-span">≡­ TODO</span>
                </button>
       
               
              </li>
              <li>
                <Link to="/ofertas">
                <button
                  className="h-button2"
                  
                >
                  <span className="h-span">OFERTAS</span>
                </button>
                </Link>
              
              </li>
              <li>
                <Link to="/servicio-al-cliente">
                <button
                  className="h-button2"
                  onClick={() => onChangeActiveComponent("ServicioCliente")}
                >
                  <span className="h-span">SERVICIO AL CLIENTE</span>
                </button>
                </Link>
              </li>
              <li>
                <Link to="/productos" >
                <button
                  className="h-button2"
                  onClick={() => onChangeActiveComponent("TipoPago")}
                >
                  <span className="h-span">PRODUCTOS</span>
                </button>
                </Link>
                
              </li>
              
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
