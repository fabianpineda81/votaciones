import React, { useEffect, useState } from 'react'
import eliminar from './../../../imagenes/eliminar.svg'

function Tabla_pieza({piezas,buscar_pieza,eliminar_pieza,grupos}) {
    return (
        <div>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Grupo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        piezas.map((pieza, index) => {
                            return <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{pieza.id}</td>
                                <td>{pieza.nombre}</td>
                                <td>{grupos[index]?.nombre}</td>
                                <td>{pieza.descripcion}</td>
                                <td>
                                    <button className="btn btn-danger col-12" onClick={() => { eliminar_pieza(pieza.id) }}>
                                        <img src={eliminar} width="25" height="25" alt="" />
                                    </button>


                                </td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default Tabla_pieza
