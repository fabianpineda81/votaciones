import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal_ingresar_usuario from './Modal_ingresar_usuario'
import Tabla_pcs from './Tabla_Usuarios'

function ConfiguracionUsuarios() {


    useEffect(() => {
        
    }, [])
    const [modalIngresar, setmodalIngresar] = useState(false)
    const toggle_ingresar = () => {
        setmodalIngresar(!modalIngresar)
    }

    
    const [usuarios, setusuarios] = useState([])


  
    const buscar_usuarios = async () => {
        const form = new FormData()
        form.append("op", "buscar_usuarios");
        const respuesta = await fetch("http://localhost/mantenimientos/controlador_usuario.php", {
            body: form,
            method: "post"
        })

        const json = await respuesta.json()
        setusuarios(json.respuesta)
        console.log(usuarios)
    }




    const usuario_pc = async (id) => {
        const form = new FormData()
        form.append("op", "eliminar")
        form.append("id", id)

        const respuesta = await fetch("http://localhost/mantenimientos/controlador_usuario.php", {
            body: form,
            method: "post"

        })

        const json = await respuesta.json();
        alert(json.mensaje)
        buscar_usuarios()

    }

    const ingresar_usuario = async (datos) => {


        const form = new FormData()
        form.append("datos", JSON.stringify(datos))
        form.append("op", "ingresar")
        const resultado = await fetch("http://localhost/mantenimientos/controlador_usuario.php", {
            method: "post",
            body: form
        })

        const json = await resultado.json();
        if (json.error = !"") {
            toggle_ingresar()
            alert(json.mensaje);
        } else {
            alert(json.mensaje)
        }

        console.log(json)
        buscar_usuarios()
    }

    const eliminar_usuario=async(id)=>{
        const form = new FormData()
       form.append("op","eliminar")
       form.append("id",id)

       const respuesta =await fetch("http://localhost/mantenimientos/controlador_usuario.php",{
           body:form,
           method:"post"

       })

       const json = await respuesta.json();
       alert(json.mensaje)
       buscar_usuarios()

   }

    return (
        <div className="contenedor">
            <div className="row">

                <Link type="button" to="/configuracion" className="btn btn-primary col-3 " >volver</Link>
            </div>

            <div className="row mt-5">
                <input type="button" value="ingresar usuario" className="btn btn-primary col-3 " onClick={toggle_ingresar} />
            </div>

            <Modal_ingresar_usuario mostrar={modalIngresar} ingresar_usuario={ingresar_usuario} toggle_ingresar={toggle_ingresar} usuarios={usuarios} />
            <Tabla_pcs usuarios={usuarios} buscar_usuarios={buscar_usuarios} eliminar_usuario={eliminar_usuario} />
        </div>
    )
}

export default ConfiguracionUsuarios
