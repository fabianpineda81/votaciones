import React, { useState } from 'react'
import '../../css/hero.css'
import HeroInformacion from './HeroInformacion'
import Bienvenido from './Bienvenido'



function Hero() {
    const [formulario, setformulario] = useState(false)
    return (
        <div className="hero">
            {
                formulario ?
                    <Bienvenido/>: null


            }
            <HeroInformacion setformulario={setformulario} formulario={formulario} />
        </div>
    )
}

export default Hero
