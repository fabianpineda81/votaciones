import React, { Fragment, useEffect,useState } from 'react'
import Pieza_cambio from './Pieza_cambio'

function Piezas_mantenimiento({piezasCambio,actualizar_informacion_pieza,removerPiezaCambio}) {
    useEffect(()=>{
            buscar_grupo()
            buscar_piezas()
    },[])
    const [grupos, setgrupos] = useState([])
    const [piezas, setpiezas] = useState([])

    
    const buscar_grupo = async () => {
        const form = new FormData()
        form.append("op", "buscar_grupos");
        const respuesta = await fetch("http://localhost/mantenimientos/controlador_grupo_pieza.php", {
            body: form,
            method: "post"
        })

        const json = await respuesta.json()
        setgrupos(json.respuesta)
        console.log(grupos[0])
    }

    const buscar_piezas = async () => {
        const form = new FormData()
        form.append("op", "buscar_pieza");
        const respuesta = await fetch("http://localhost/mantenimientos/controlador_pieza.php", {
            body: form,
            method: "post"
        })

        const json = await respuesta.json()
        setpiezas(json.respuesta)
        console.log("grupo",json.respuesta)
        
    }
    const filtrar_piezas=(id)=>{
        let filtrado = piezasCambio
        alert(id)
        
    }

    const accionGrupo=(event, index)=>{
         let filtro=grupos[index].id
        filtrar_piezas(filtro)
    }

    return (
        <Fragment>
            {
            piezasCambio.map((piezaCambio, index) => {
                        return <Pieza_cambio removerPiezaCambio={removerPiezaCambio} key={index} index={index} actualizar_informacion_pieza={actualizar_informacion_pieza} piezas={piezas} grupos={grupos}/>
                    })
                }
        </Fragment>
    )
}

export default Piezas_mantenimiento
