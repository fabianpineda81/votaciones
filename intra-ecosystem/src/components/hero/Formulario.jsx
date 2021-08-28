import React from 'react'

function Formulario() {
    return (
        <div className="contenedor_formulario">
                <div className="contenedor_titulo">
                    <p className="titulo_formulario">
                        Buy
                    </p>
                    <div className="contenedor_divider">
                    <hr className="divider_titulo_formulario" />
                    <hr className="divider_titulo_formulario2" />

                    </div>
                </div>

                <div className="contenedor_formulario_inputs">
                    <div className="contenedor_input">

                    <input type="number" className="input" placeholder="cantidad"/>
                    <hr />
                    <div className="contenedor_palabra_input">
                        <p>INTRA</p>
                        <p>INT</p>
                    </div>
                    </div>
                    

                </div>
                <div>
                <div className="contenedor_saldo">
                    <p className="titulo_saldo">Saldo</p>
                    <p className="saldo">$1.000</p>

                </div>
                    <input type="text" value="Buy now" className="botones_pagina boton_saldo" />
                </div>
                
        </div>
    )
}

export default Formulario
