import React, { useEffect, useState } from 'react'
import eliminar from './../../../imagenes/eliminar.svg'
function Tabla_pcs({ pcs, buscar_pcs, eliminar_pc }) {
    useEffect(() => {
        buscar_pcs()
    }, [])


    return (
        <div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col"># serie</th>
                        <th scope="col">Ultimo mantenimiento</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">estado actual</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        pcs.map((pc, index) => {
                            return <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{pc.id}</td>
                                <td>{pc.numero_serie}</td>
                                <td>{pc.ultimo_mantenimiento}</td>
                                <td>{pc.descripcion}</td>
                                <td>{pc.estado_actual}</td>
                                <td>
                                    <button className="btn btn-danger col-12" onClick={() => { eliminar_pc(pc.id) }}>
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

export default Tabla_pcs
