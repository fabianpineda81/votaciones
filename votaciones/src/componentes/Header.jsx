import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect, useHistory, useLocation
} from "react-router-dom";
import Candidatos from './Candidatos';
import Componente_login from './Componente_login';

const Header = ({actualizar_login}) => {

    /* let locacion= useLocation();
    let history = useHistory(); */

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <button className="nav-link" onClick={()=>{actualizar_login(false)}}>Login</button>
                    </li>
                    <li className="nav-item">
                       
                    </li>
                    <li className="nav-item">
                    <Link to="/candidatos" className="nav-link ">Candidatos</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/configuraciones" className="nav-link ">Configurar</Link>
                    </li>

                    
                    
                    
                </ul>
            </div>
        </nav>
        
       
        
        



        
    )
}

export default Header
