import React, { useEffect, useState } from 'react'
import eliminar from './../../../imagenes/eliminar.svg'



function Tabla_Usuarios({ usuarios, buscar_usuarios, eliminar_usuario }) {
  
    useEffect(() => {
        buscar_usuarios()
    }, [])


    return (
        <div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cedula</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Correo</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        usuarios.map((usuario, index) => {
                            return <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{usuario.cedula}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.rol}</td>
                                <td>{usuario.correo}</td>
                                <td>
                                    <button className="btn btn-danger col-12" onClick={() => { eliminar_usuario(usuario.id) }}>
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

export default Tabla_Usuarios
