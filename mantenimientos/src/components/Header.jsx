import React from 'react'
import { Link } from 'react-router-dom'
import './../css/header.css'


function Header() {



    return (


        <header className="header">

            <div className="contenedor">

                <Link className="logo" to="/" >
                    ACF 
                 </Link>



                <nav className="menu">
                    <ol >
                        <li >

                            <Link className="link" to="/servicios">Servicios</Link>
                        </li>




                        <li>
                            <Link className="link" to="/reportes">Reportes</Link>
                        </li>
                        <li>
                            <Link className="link" to="/configuracion">Configuracion</Link>
                        </li>

                       
                      


                    </ol>
                </nav>

            </div>
        </header>

    )
}

export default Header
