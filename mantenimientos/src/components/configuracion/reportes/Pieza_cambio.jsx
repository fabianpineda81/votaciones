import React, { useState, useEffect } from 'react'
import eliminar from './../../../imagenes/eliminar.svg'
function Pieza_cambio({ piezas, grupos, index, actualizar_informacion_pieza, removerPiezaCambio }) {
    useEffect(() => {

    }, [])

    const [piezas2, setpiezas2] = useState(piezas)
    const [grupos2, setgrupos2] = useState(grupos)
    const [piezasFiltradas, setpiezasFiltradas] = useState([])
    const filtrarPiezas = (event, value) => {
        let idGrupo
        if (value == null) {
            idGrupo = event.target.value

        } else {
            idGrupo = value
        }

        let piezas = piezas2.filter((pieza) => pieza.id_grupo === idGrupo)
        actualizar_informacion_pieza(index, null, piezas[0].id)
        setpiezasFiltradas(piezas)
    }

    return (

        <div className="row" key={index}>
            <div className="form-group col">
                <label htmlFor="">grupo</label>
                <select name="id_grupo" className="form-select" onChange={filtrarPiezas} id={`grupoPieza${index}`}>
                    <option value="">Selecionar</option>
                    {grupos.map((grupo, index) => {
                        return <option key={index} value={grupo.id}>{grupo.nombre}</option>
                    })}
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="">pieza</label>

                <select name="id_pieza" defaultValue={{ label: "Select Dept", value: 0 }} className="form-select" onChange={(event) => { actualizar_informacion_pieza(index, event) }} id={`grupoPieza${index}`}>
                    <option value="">Selecionar</option>
                    {piezasFiltradas.map((pieza, index) => {
                        return <option key={index} value={pieza.id}>{pieza.nombre}</option>
                    })}
                </select>
            </div>



            <div className="form-group col">

                <div className="form-floating">
                    <input type="text" className="form-control" name="numero_serie" onChange={(event) => { actualizar_informacion_pieza(index, event) }} placeholder="Leave a comment here" id="floatingTextarea2" />
                    <label for="floatingTextarea2">Marca</label>
                </div>
            </div>
            <div className="form-group col">

                <div className="form-floating">
                    <input type="text" className="form-control" name="modelo" onChange={(event) => { actualizar_informacion_pieza(index, event) }} placeholder="Leave a comment here" id="floatingTextarea2" />
                    <label for="floatingTextarea2">Modelo</label>
                </div>
            </div>
            <div className="form-group col">

                <div className="form-floating">
                    <input type="text" className="form-control" name="marca" onChange={(event) => { actualizar_informacion_pieza(index, event) }} placeholder="Leave a comment here" id="floatingTextarea2" required />
                    <label for="floatingTextarea2">Numero de serie</label>
                </div>
            </div>
            <div className="form-group col">

                <div className="form-floating">
                    <textarea className="form-control" name="descripcion" onChange={(event) => { actualizar_informacion_pieza(index, event) }} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                    <label for="floatingTextarea2">Comentatirio</label>
                </div>
            </div>

            <div className="form-group col-1">

                <img onClick={() => { removerPiezaCambio(index) }} src={eliminar} width="59%" height="50%" alt="" />


            </div>

        </div>

    )
}

export default Pieza_cambio
