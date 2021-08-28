import React, { useState } from 'react'
import { Link,useRouteMatch } from 'react-router-dom'

function Configuraciones() {
    let match= useRouteMatch();
    const [hola, sethola] = useState(true)
    return (
        <div>
            <Link className="btn btn-primary" to={`${match.url}/localidades`}>Configurar Localidades</Link>
            <Link className="btn btn-primary" to={`${match.url}/ciudades`}>Configurar Ciudades</Link>
        </div>
    )
}

export default Configuraciones
