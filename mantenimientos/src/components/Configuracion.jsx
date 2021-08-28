import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


function Configuracion({componente}) {
    console.log(componente)
    return (
        <div>
            <div className="contenedor">
                <div className="row">
                    <div className="col-3">

                    <Link type="button" to="/configuracion/grupos_piezas" className="btn btn-primary"> Configurar grupos de piezas </Link>
                    </div>

                    <div className="col-3">

                    <Link type="button" to="/configuracion/mantenimientos_obligatorios" className="btn btn-primary"> mantenimientos obligatorios </Link>
                    </div>

                    <div className="col-3">

                    <Link type="button" to="/configuracion/piezas" className="btn btn-primary"> Configurar  piezas </Link>
                    </div>
                    <div className="col-3">

                    <Link type="button" to="/configuracion/pcs" className="btn btn-primary"> Configurar  pcs </Link>
                    </div>

                    <div className="col-3">

                    <Link type="button" to="/configuracion/usuarios" className="btn btn-primary"> Configurar  Usuarios </Link>
                    </div>
                </div>

                
            
            </div>
        </div>
    )
}

export default Configuracion
