import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Modal_ingresar_mantenimiento_obligatorio from './Modal_ingresar_mantenimiento_obligatorio'
import Tabla_mantenimientos_obligatorios from './Tabla_mantenimientos_obligatorios'


function Configuracion_mantenimientos_obligatorios() {const [modalIngresar, setmodalIngresar] = useState(false)
    const toggle_ingresar= ()=>{
        setmodalIngresar(!modalIngresar)
    }

    const [mantenimientos, setmantenimientos] = useState([])



    const buscar_mantenimientos=async()=>{
        const form= new FormData()
        form.append("op","buscar_mantenimientos");
        const respuesta= await fetch("http://localhost/mantenimientos/controlador_mantenimiento_obligatorio.php",{
            body:form,
            method:"post"
        })

        const json =await respuesta.json()
        setmantenimientos(json.respuesta)
        
    }

    const eliminar_mantenimiento=async(id)=>{
        const form = new FormData()
       form.append("op","eliminar")
       form.append("id",id)

       const respuesta =await fetch("http://localhost/mantenimientos/controlador_mantenimiento_obligatorio.php",{
           body:form,
           method:"post"

       })

       const json = await respuesta.json();
       alert(json.mensaje)
       buscar_mantenimientos()

   }

   const ingresar_grupo=async (datos)=>{
       
       
    const form = new FormData()
    form.append("datos",JSON.stringify(datos))
    form.append("op","ingresar")
    const resultado = await fetch("http://localhost/mantenimientos/controlador_mantenimiento_obligatorio.php",{
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
    buscar_mantenimientos()
}

    return (
        <div className="contenedor">
            <div className="row">

                <Link type="button" to="/configuracion" className="btn btn-primary col-3 " >volver</Link>
            </div>

            <div className="row mt-5">
                <input type="button" value="ingresar mantenimiento" className="btn btn-primary col-3 " onClick={toggle_ingresar}/>
            </div>

            <Modal_ingresar_mantenimiento_obligatorio mostrar={modalIngresar} ingresar_grupo={ingresar_grupo} toggle_ingresar={toggle_ingresar}/>
            <Tabla_mantenimientos_obligatorios mantenimientos={mantenimientos} buscar_mantenimientos={buscar_mantenimientos} eliminar_mantenimiento={eliminar_mantenimiento} />
      </div>
    )

}

export default Configuracion_mantenimientos_obligatorios
