import React from 'react'
import { Link } from 'react-router-dom'

function Candidato({candidato}) {
    return (
            <div className="col-4">
            <div className="card">
                <div className="card-header">
                <h3>Candidato {candidato.nombre}</h3>    
                </div>
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <p>{candidato.descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{candidato.id_partido}</li>
                    <li className="list-group-item">{candidato.id_ciudad}</li>
                    <li className="list-group-item">{candidato.id_localidad}</li>
                </ul>
                <div className="card-footer">
                <Link to={`/candidato/${candidato.id}`}>Detalles</Link>
                    <Link to={`/Modificar/candidato/${candidato.id}`}>Modificar</Link>
                    <Link to={`/eliminar/candidado/${candidato.id}`}>Eliminar</Link>


                </div>
            </div>
            </div>
        
    )
}

export default Candidato
