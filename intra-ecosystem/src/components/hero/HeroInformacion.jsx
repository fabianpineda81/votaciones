import React, { Fragment, useState } from 'react'
import Bienvenido from './Bienvenido'
import Informacion from './Informacion'
import Formulario from './Formulario'

function HeroInformacion({setformulario,formulario}) {
    
    return (


        <div className={`contenedor_informacion ${formulario? "contenedor_informacio_pequeño":""} ` }>
                {
                formulario?<Formulario/>:<Informacion setformulario={setformulario} />
                
                }
            </div>






    )
}

export default HeroInformacion
