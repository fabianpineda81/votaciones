
import React from 'react'
import { useParams } from 'react-router-dom'

function Detalle_candidato() {
    const {id}=useParams();    
    return (
        <div>
            <h1>candidato con el id {id}</h1>
        </div>
    )
}

export default Detalle_candidato
