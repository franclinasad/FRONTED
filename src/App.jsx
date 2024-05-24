import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./componentes/header";
import { Article } from "./componentes/article";
import { Footer } from "./componentes/footer";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const handleSetActiveComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <div className="mb-3">
        <Header onChangeActiveComponent={handleSetActiveComponent} />
      </div>
      <div className="p-2">
        <Article activeComponent={activeComponent} />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
