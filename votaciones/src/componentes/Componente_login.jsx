import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,Redirect, useHistory ,useLocation
  } from "react-router-dom";


import React,{useState} from 'react'
import Login from "./Login";
import Crear_usuario from "./Crear_usuario";

function Componente_login({actualizar_login}) {
    const [crear_usuario, setcrear_usuario] = useState(false)
    
    return (
        <div>
             
                {crear_usuario?(
                    <Redirect to="/crear_usuario"/>
                ):(
                    <Login setcrear_usuario={setcrear_usuario} actualizar_login={actualizar_login}/>
                )}
               
            
           

            

            
        </div>
    )
}

export default Componente_login
