import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Modal_ingresar_grupo_pieza from './Modal_ingresar_grupo_pieza'
import Tabla_grupo_pieza from './Tabla_grupo_pieza'


function Configuracion_grupo_pieza() {
    const [modalIngresar, setmodalIngresar] = useState(false)
    const toggle_ingresar= ()=>{
        setmodalIngresar(!modalIngresar)
    }

    const [grupos, setgrupos] = useState([])



    const buscar_grupo=async()=>{
        const form= new FormData()
        form.append("op","buscar_grupos");
        const respuesta= await fetch("http://localhost/mantenimientos/controlador_grupo_pieza.php",{
            body:form,
            method:"post"
        })

        const json =await respuesta.json()
        setgrupos(json.respuesta)
        console.log(grupos[0])
    }

    const eliminar_grupo=async(id)=>{
        const form = new FormData()
       form.append("op","eliminar")
       form.append("id",id)

       const respuesta =await fetch("http://localhost/mantenimientos/controlador_grupo_pieza.php",{
           body:form,
           method:"post"

       })

       const json = await respuesta.json();
       alert(json.mensaje)
       buscar_grupo()

   }

   const ingresar_grupo=async (datos)=>{
       
       
    const form = new FormData()
    form.append("datos",JSON.stringify(datos))
    form.append("op","ingresar")
    const resultado = await fetch("http://localhost/mantenimientos/controlador_grupo_pieza.php",{
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
    buscar_grupo()
}

    return (
        <div className="contenedor">
            <div className="row">

                <Link type="button" to="/configuracion" className="btn btn-primary col-3 " >volver</Link>
            </div>

            <div className="row mt-5">
                <input type="button" value="ingresar grupo" className="btn btn-primary col-3 " onClick={toggle_ingresar}/>
            </div>

            <Modal_ingresar_grupo_pieza mostrar={modalIngresar} ingresar_grupo={ingresar_grupo} toggle_ingresar={toggle_ingresar}/>
            <Tabla_grupo_pieza grupos={grupos} buscar_grupo={buscar_grupo} eliminar_grupo={eliminar_grupo} />
      </div>
    )
}

export default Configuracion_grupo_pieza
