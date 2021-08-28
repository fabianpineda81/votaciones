import React from 'react'
import imagenMano from '../../images/imagen_mano_intra.png'


function Bienvenido() {
    return (
        <div className="contenedor_bienvenido">
            <div className="contenedor_imagen_bienvenido">
                <img src={imagenMano} alt="todo bien" className="imagen_bienvenido" />

            </div>
            <div className="contendor_titulo_bienvenido">
                <p className="titulo_bienvenido">
                    Hola,Bienvenido!
                </p>


            </div>
            <div className="contenedor_informacion_bienvenido">
                <p className="informacion_contenido">
                    Adquirir INTRA coins es muy facil, si estas aqui es porque ya tienes
                    tu wallet conecatada pro medio de un broker a nuestro sistema, a
                    continuacion encontrar el modulo para hacer swap, buy/sell coins
                    en un mismo lugar, exitos!
                </p>

                <div className="contenedor_item_informacion">
                    <p className="titulo_item_informacion">
                        Wallet
                    </p>
                    <p className="texto_item_informacion">
                    121098732364875 - 34
                    </p>

                    
                </div>
                <div className="contenedor_item_informacion">
                    <p className="titulo_item_informacion">
                        Saldo
                    </p>
                    <p className="texto_item_informacion">
                    1.000
                    </p>

                    
                </div>
            </div>
        </div>
    )
}

export default Bienvenido
