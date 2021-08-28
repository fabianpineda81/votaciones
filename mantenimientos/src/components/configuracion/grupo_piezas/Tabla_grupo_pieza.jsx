import React, { useEffect, useState } from 'react'
import eliminar from './../../../imagenes/eliminar.svg'


function Tabla_grupo_pieza({ grupos, buscar_grupo, eliminar_grupo }) {
    useEffect(() => {
        buscar_grupo()
    }, [])


    return (
        <div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        grupos.map((grupo, index) => {
                            return <tr>
                                <th scope="row">{index}</th>
                                <td>{grupo.id}</td>
                                <td>{grupo.nombre}</td>
                                <td>{grupo.descripcion}</td>
                                <td>
                                    <button className="btn btn-danger col-12" onClick={() => { eliminar_grupo(grupo.id) }}>
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

export default Tabla_grupo_pieza
