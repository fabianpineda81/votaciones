import React from 'react'
import TablaReportes from './TablaReportes'
import {Link} from 'react-router-dom'

function Reportes() {
    return (
        <div className="contenedor">
            <div className="row">
            <Link type="button" className="btn btn-primary col-3 me-5" to="/reportes/ingresar">Ingresar_reporte </Link>
            <input type="button"  className="btn btn-primary col-3 ms-5" value="filtrar reportes"/>

            </div>
            <TablaReportes></TablaReportes>
        </div>
    )
}

export default Reportes
