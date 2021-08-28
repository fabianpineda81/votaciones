import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Piezas_mantenimiento from './Piezas_mantenimiento'

function Ingresar_reporte() {
    useEffect(() => {

        buscar_mantenimientos_oblogatorios()
        buscar_usuarios()
    }, [])
    const [reportes, setreportes] = useState([])


    const [piezasCambio, setpiezasCambio] = useState([])
    const [mantenimientos_obligatorios, setmantenimientos_obligatorios] = useState([])


    const [usuarios, setusuarios] = useState([])
    const [datos, setdatos] = useState({
        id_usuario: "",
        descripcion: ""

    })



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


    const buscar_mantenimientos_oblogatorios = async () => {
        const form = new FormData()
        form.append("op", "buscar_mantenimientos");
        const respuesta = await fetch("http://localhost/mantenimientos/controlador_mantenimiento_obligatorio.php", {
            body: form,
            method: "post"
        })

        const json = await respuesta.json()

        let mantenimientos = json.respuesta.map((mantenimiento) => {
            mantenimiento.realizado = false;
            return mantenimiento;
        })
        setmantenimientos_obligatorios(mantenimientos)
        console.log("reporte", mantenimientos_obligatorios)

    }



    const actualizar_informacion = (event) => {

        setdatos({
            ...datos,
            [event.target.name]: event.target.value
        })


    }
    const actualizar_informacion_pieza = (pos, event,value) => {
        if (event != null) {
            let copia = piezasCambio
            copia[pos][event.target.name] = event.target.value
            console.log(copia)
            setpiezasCambio(copia)
        } else {
            let copia = piezasCambio
            copia[pos].id_pieza = value
            console.log(copia)
            setpiezasCambio(copia)

        }

    }
    const removerPiezaCambio=(pos)=>{
        let copia = piezasCambio
        copia.splice(pos,1)
        setpiezasCambio((copia)=>{
                setpiezasCambio(copia)
        })
        console.log(copia)            
    }



    const actualizar_informacion_mantenimiento_obligatorio = (pos) => {
        let copia = mantenimientos_obligatorios
        copia[pos].realizado = !copia[pos].realizado
        console.log(copia[pos].realizado);
        setmantenimientos_obligatorios(copia)
    }
    






    const agregar_pieza = () => {
        setpiezasCambio([...piezasCambio, { id_pieza: "3", descripcion: "" }])

        console.log(piezasCambio)

    }

    const insertar = (event) => {
        event.preventDefault()
        /*  if (datos.id_grupo == "") {
             alert("tiene que escoger un grupo")
         } else {
             ingresar_pieza(datos)
         } */
        let copia = datos
        copia.piezas_cambio=piezasCambio
        copia.mantenimientos_obligatorios=mantenimientos_obligatorios
        console.log("reporte", copia)

    }




    const buscar_reportes = async () => {
        const form = new FormData()
        form.append("op", "buscar_pieza");
        const respuesta = await fetch("http://localhost/mantenimientos/controlador_pieza.php", {
            body: form,
            method: "post"
        })

        const json = await respuesta.json()
        setreportes(json.respuesta)

    }

    return (
        <div className="contenedor">
            <div className="row">

                <Link to="/reportes" className="btn btn-primary col-3">Volver</Link>
            </div>
            <form onSubmit={insertar}>
                <div class="form-row row">

                    <div class="form-group col">
                        <label>Usuario</label>
                        <select className="form-select" name="id_usuario" id="id_usuario">
                            {usuarios.map((usuario, index) => {
                                return <option key={index} value={usuario.id}>{usuario.nombre}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group mt-4 mb-3">
                        <label for="inputEmail4">descripcion</label>
                        <textarea name="descripcion" onChange={actualizar_informacion} name="descripcion" id="descripcion" className="form-control" cols="10" rows="3" value={datos.descripcion} onChange={actualizar_informacion} placeholder="ingresa descripcion" />
                    </div>

                </div>
                <div className="row">
                    <div className="form-group">
                        <h2>Mantenimeinto obligatorio</h2>
                    </div>





                    {mantenimientos_obligatorios.map((mantenimiento, index) => {
                        return <div className="row" key={index}>
                            <div className="form-group col">
                                <input className="form-control" type="text" name="" id="" value={mantenimiento.nombre} disabled />
                            </div>

                            <div className="form-group col">
                                <div class="form-check form-switch">
                                    <label class="form-check-label" for="flexSwitchCheckChecked" >Realizado</label>
                                    <input class="form-check-input" type="checkbox" onChange={() => { actualizar_informacion_mantenimiento_obligatorio(index) }} />
                                </div>
                            </div>

                        </div>
                    })}

                </div>
                <div className="row">
                    <div className="form-group">
                        <h2>Piezas de cambio</h2>
                    </div>
                </div>


                <Piezas_mantenimiento piezasCambio={piezasCambio} removerPiezaCambio={removerPiezaCambio} actualizar_informacion_pieza={actualizar_informacion_pieza} />
                <div className="row">
                    <input type="button" className="btn btn-primary col-3 " onClick={agregar_pieza} value="insertar pieza" />

                </div>



                <button type="submit" class="btn btn-primary">Ingresar</button>
            </form>

        </div>
    )
}

export default Ingresar_reporte
