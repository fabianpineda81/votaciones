import Header from "./componentes/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect, useHistory ,useLocation
} from "react-router-dom";


import React ,{useState}from 'react';
import Login from "./componentes/Login";
import Componente_login from "./componentes/Componente_login";
import Candidatos from "./componentes/Candidatos";
import Crear_usuario from "./componentes/Crear_usuario";
import Detalle_candidato from "./componentes/Detalle_candidato";
import Crear_candidato from "./componentes/Crear_candidato";
import Configuraciones from "./componentes/Configuraciones";
import Localidades from "./componentes/localidades";
import Ciudades from "./componentes/Ciudades/Ciudades";




function App() {
  const [logueado, setlogueado] = useState(true)
  
  
  
  
  
    React.useEffect(()=>{
      verificar_login()
      

    },[])

    const actualizar_login = (respuesta)=>{
      setlogueado(respuesta)
    } 

    const mostrar_header=(boo)=>{
      if(boo){
        return <Header actualizar_login={actualizar_login}/>
      }
    }
  
  
  async function verificar_login(){

/* 
    const form= new FormData()
    form.append("op","");
    const res =await fetch('http://localhost/votacion2/',{
      method: 'POST',
        mode: 'cors',
      body:form 
    });
    const json = await res.json();
   // console.log(history)

      if(json.error!=""){
        console.log(json.error);
      }else{
       setlogueado(json.respuesta);
         
      }
      debugger */


   }
  return (
    <div className="App container">
     
      <Router>
      {
        mostrar_header(logueado)
      }
       
        {  
            logueado?
            ( <Redirect push to="/"/>):

            ( <Redirect push to="/login"/>)

           }  
       
       
       
       
       
       
        <Switch>
           <Route path="/candidato/:id">
            <Detalle_candidato/>
           </Route>
           <Route path="/configuraciones/localidades">
            <Localidades></Localidades>
           </Route>
           <Route path="/configuraciones/ciudades">
            <Ciudades></Ciudades>
           </Route>
           
           <Route path="/configuraciones">
             <Configuraciones/>
           </Route>

           <Route path="/login" >
           <Componente_login  actualizar_login={actualizar_login}/>
          </Route>

          <Route path="/candidatos" >
            <Candidatos/>
          </Route>

          <Route path="/crear_usuario"  >
              <Crear_usuario actualizar_login={actualizar_login} />
           </Route>
           <Route path="/crear_candidato">
             <Crear_candidato/>
             </Route>
     </Switch>

      </Router>
    
      
        
    </div>
  );
}

export default App;
