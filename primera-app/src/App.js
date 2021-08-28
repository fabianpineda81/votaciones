    
import React from "react";
import Contador from "./components/Contador";
import Jsx from "./components/Jsx"
import Lista from "./components/Lista"
import HookFormulario from "./components/HookForm"
import Formulario from "./components/Formulario"
import FormEjemplo from "./components/FormEjemplo"
import Saludo  from "./components/Saludo";

import Comentario from "./components/Comentario";


function App() {
  const sujeto ={
    nombre:'juanito',
    url:'https://via.placeholder.com/64',
    texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }
  
  return (
    <div className="App container mt-3">
     <Comentario sujeto={sujeto}/>
      
    </div>
  );
}

export default App;
