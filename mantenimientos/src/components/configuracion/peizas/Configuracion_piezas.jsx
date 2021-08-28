import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Modal_ingresar_pieza from './Modal_ingresar_pieza'
import Tabla_pieza from './Tabla_pieza'


function Configuracion_piezas() {
    useEffect(() => {
        buscar_grupo()
        buscar_piezas()
    }, [])

    const [modalIngresar, setmodalIngresar] = useState(false)
    const toggle_ingresar = () => {
        setmodalIngresar(!modalIngresar)
    }

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
        console.log(grupos[0])
    }

    const eliminar_pieza = async (id) => {
        const form = new FormData()
        form.append("op", "eliminar")
        form.append("id", id)

        const respuesta = await fetch("http://localhost/mantenimientos/controlador_pieza.php", {
            body: form,
            method: "post"

        })

        const json = await respuesta.json();
        alert(json.mensaje)
        buscar_piezas()

    }

    const ingresar_pieza = async (datos) => {


        const form = new FormData()
        form.append("datos", JSON.stringify(datos))
        form.append("op", "ingresar")
        const resultado = await fetch("http://localhost/mantenimientos/controlador_pieza.php", {
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
        buscar_piezas()
    }
    return (
        <div className="contenedor">
            <div className="row">

                <Link type="button" to="/configuracion" className="btn btn-primary col-3 " >volver</Link>
            </div>

            <div className="row mt-5">
                <input type="button" value="ingresar pieza" className="btn btn-primary col-3 " onClick={toggle_ingresar} />
            </div>

            <Modal_ingresar_pieza mostrar={modalIngresar} ingresar_pieza={ingresar_pieza} grupos={grupos} toggle_ingresar={toggle_ingresar} />
            <Tabla_pieza piezas={piezas} buscar_piezas={buscar_piezas} eliminar_pieza={eliminar_pieza} grupos={grupos} />
        </div>
    )
}

export default Configuracion_piezas
