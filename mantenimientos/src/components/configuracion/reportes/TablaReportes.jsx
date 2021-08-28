import React from 'react'
import eliminar from './../../../imagenes/eliminar.svg'

function TablaReportes({ mantenimientos, buscar_mantenimientos, eliminar_mantenimiento }) {
    return (
        <div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">tipo</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        mantenimientos?.map((mantenimiento, index) => {
                            return <tr>
                                <th scope="row">{index}</th>
                                <td>{mantenimiento.id}</td>
                                <td>{mantenimiento.nombre}</td>
                                <td>{mantenimiento.descripcion}</td>
                                <td>
                                    <button className="btn btn-danger col-12" onClick={() => { eliminar_mantenimiento(mantenimiento.id) }}>
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

export default TablaReportes
