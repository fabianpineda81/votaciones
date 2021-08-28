    
import React from "react";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  NavLink
} from "react-router-dom";
import Contacto from "./componentes/Contacto";
import Inicio from './componentes/Inicio';
import Nosotros from "./componentes/Nosotros";
import User from "./componentes/User";



function App() {
 
  
  return (

    // al parecer tiene que encerrar todo lo que tiene que ver con las rutas 
    <Router>
    <div className="App container mt-3">
       <div className="btn-group">
         <NavLink to="/"  className="btn btn-dark" activeClassName="active">
           Inicio
         </NavLink>
         <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
           Contacto
         </NavLink>
         <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
           Nosotros
         </NavLink>

       </div>
        <hr/>
        {/* aca al parecer en el switch se pone todo que va a hacer dimamico  */}
        <Switch>
            {/* para declarar cuando va aparecer un elemento se pone una route y en el path se pone la ruta cuando este elemento va a parecer */}
            
            {/* las rutas hay que trabajarlas de lo mas especifico a lo mas general para que funcionen bien o puedes poner exact para que solo aparesca en esa ruta exactamente */}
            {/* aca se le pone los :nombre para recibir una variable por url */}
            <Route path="/nosotros/:id">
            <User/>
               </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/nosotros">
          <Nosotros/>
          </Route>

          <Route path="/" exact>
            <Inicio/>
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
