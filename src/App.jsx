import { useState } from "react";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";

import { Header } from "./componentes/header";
import { Footer } from "./componentes/footer";
import { ServicioCliente } from "./componentes/serviceClient";
import { TranferenciaBancaria } from "./componentes/tranferenciaB";
import { PagoYappy } from "./componentes/yappy";
import { Inicio } from "./componentes/index";
import Login from "./componentes/Login";

import Sidebar from "./componentes/Sidevar";
import Perfil from "./sidevarc/Pefil";
import Saldo from "./sidevarc/Saldo";
import Universidad from "./sidevarc/Universidad";
import Autores from "./sidevarc/Autores";
import { Browser } from "./componentes/browser";
import Productos from "./componentes/productos";
import Ofertas from "./componentes/ofertas";
import Carito from "./componentes/Carito";
import Pedidos from "./componentes/Pedidos";


function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const [name,setName] = useState("");
  
  
  const handleSetActiveComponent = (componentName) => {
    setActiveComponent(componentName);
  };
  const handleLoginSuccess = (id,nombre) => {
    setIsLoggedIn(true); // Actualiza el estado cuando el usuario inicia sesión correctamente
    setUserId(id); 
    setName(nombre);
     
  };

  console.log(name);
  console.log(userId);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alterna el estado de visibilidad del sidebar
  };



  return (
    <BrowserRouter>
      <div>
            {!isLoggedIn && ( 
              <Routes>
              <Route exact path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
              </Routes>
            )}   
            {isLoggedIn && ( 
              <>
                  <Header userId={userId} onChangeActiveComponent={handleSetActiveComponent} toggleSidebar={toggleSidebar} />            
                  <Routes>
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/servicio-al-cliente" element={<ServicioCliente userId={userId} nombre={name} />} />
                    <Route path="/perfil" element={<Perfil userId={userId}/>} />
                    <Route path="/saldo" element={<Saldo userId={userId}/>} />
                    <Route path="/universidad" element={<Universidad userId={userId}/>} />
                    <Route path="/autores" element={<Autores userId={userId}/>} />
                    <Route path="/browser"  element={<Browser/>}></Route>

                    <Route path="/productos" element={<Productos />}></Route>
                    <Route path="/ofertas" element={<Ofertas/>}></Route>
                    <Route path="/carrito" element={<Carito/>}></Route>
                    <Route path="/pedidos" element={<Pedidos/>}></Route>

                </Routes>
                <Footer />
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  nombre={name} />
                </>
            )}
      </div>
    </BrowserRouter>
  );
}

export default App;