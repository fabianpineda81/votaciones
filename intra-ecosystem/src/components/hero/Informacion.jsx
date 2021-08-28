import React,{Fragment,useState} from 'react'
import imgMano from '../../images/imagen_mano_intra.png'

function Informacion({setformulario}) {
    
    const [hover_boton, sethover_boton] = useState(false)
    return (
        <Fragment>
        <div className="informacion">
            <div className="titulo_contenedor_titulo">
                <p className="titulo_informacion">
                    Animate Your ideas,
                </p>
                <p className="titulo_informacion">
                    Desing Better Apps
                </p>
            </div>
            <div className="contenedor_subtitulo">
                <p className="subtitulo_informacion">
                    Make it easy to desing animated and interactive user interfaces,

                </p>
                <p className="subtitulo_informacion">
                    Work done for an upcoming NFT marketplace catered to musicians.
                </p>
            </div>

            <div className="contenedor_botones">
                <button
                    className=" botones_informacion"
                    onMouseOver={() => { setTimeout(() => { sethover_boton(true) }, 150) }}
                    onMouseLeave={() => { setTimeout(() => { sethover_boton(false) }, 150) }}
                    onClick={()=>{setformulario(true)}}
                >{hover_boton ? "buy for $0.004" : "Buy token"}</button>
                <button
                    className="botones_pagina">see Whitepaper</button>


            </div>
            <div className="contenedor_numeros">
                <div className="item">
                    <div className="numeros">
                        <p className="numero_numeros" >100M</p>
                        <p className="titulo_numeros">Pre sale Token</p>
                    </div>

                    
                <div class="rounded"></div>
                </div>
                <div className="item">
                    <div className="numeros">
                        <p className="numero_numeros" >250M</p>
                        <p className="titulo_numeros">Pre sale Token</p>
                    </div>

                    
                <div class="rounded"></div>
                </div>
                <div className="item">
                    <div className="numeros">
                        <p className="numero_numeros numero_variente_verde" >250M</p>
                        <p className="titulo_numeros">Pre sale Token</p>
                    </div>

                    
                
                </div>

            </div>




        </div>
        <div className="contenedor_imagen_informacion">
            <img src={imgMano} alt="imagen_mano_intra" className="imagen_informacion" />
        </div>

        <div className="formulario">

        </div>
        </Fragment>
        
        
    
    )
}

export default Informacion
