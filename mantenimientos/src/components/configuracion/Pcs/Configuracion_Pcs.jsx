import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Modal_ingresar_pc from './Modal_ingresar_pcs'
import Tabla_pcs from './Tabla_pcs'

function Configuracion_Pcs() {

    useEffect(()=>{
            buscar_usuarios()
    },[])
    const [modalIngresar, setmodalIngresar] = useState(false)
    const toggle_ingresar= ()=>{
        setmodalIngresar(!modalIngresar)
    }

    const [pcs, setpcs] = useState([])
    const [usuarios, setusuarios] = useState([])


    const buscar_pcs=async()=>{
        const form= new FormData()
        form.append("op","buscar_pcs");
        const respuesta= await fetch("http://localhost/mantenimientos/controlador_pcs.php",{
            body:form,
            method:"post"
        })

        const json =await respuesta.json()
        setpcs(json.respuesta)
        console.log(pcs[0])
    }

    const buscar_usuarios=async()=>{
        const form= new FormData()
        form.append("op","buscar_usuarios");
        const respuesta= await fetch("http://localhost/mantenimientos/controlador_usuario.php",{
            body:form,
            method:"post"
        })

        const json =await respuesta.json()
        setusuarios(json.respuesta)
        console.log(usuarios)
    }




    const eliminar_pc=async(id)=>{
        const form = new FormData()
       form.append("op","eliminar")
       form.append("id",id)

       const respuesta =await fetch("http://localhost/mantenimientos/controlador_pcs.php",{
           body:form,
           method:"post"

       })

       const json = await respuesta.json();
       alert(json.mensaje)
       buscar_pcs()

   }

   const ingresar_pc=async (datos)=>{
       
       
    const form = new FormData()
    form.append("datos",JSON.stringify(datos))
    form.append("op","ingresar")
    const resultado = await fetch("http://localhost/mantenimientos/controlador_pcs.php",{
    method:"post",    
    body:form
    })

    const json = await resultado.json();
    if(json.error=!""){
        toggle_ingresar()
        alert(json.mensaje);
    }else{
        alert(json.mensaje)
    }

    console.log(json)
    buscar_pcs()
}

    return (
        <div className="contenedor">
            <div className="row">

                <Link type="button" to="/configuracion" className="btn btn-primary col-3 " >volver</Link>
            </div>

            <div className="row mt-5">
                <input type="button" value="ingresar Pc" className="btn btn-primary col-3 " onClick={toggle_ingresar}/>
            </div>

            <Modal_ingresar_pc mostrar={modalIngresar} ingresar_pc={ingresar_pc} toggle_ingresar={toggle_ingresar} usuarios={usuarios} />
            <Tabla_pcs pcs={pcs} buscar_pcs={buscar_pcs} eliminar_pc={eliminar_pc} />
      </div>
    )
}

export default Configuracion_Pcs
