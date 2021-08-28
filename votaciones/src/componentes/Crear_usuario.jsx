import React,{useState} from 'react'

function Crear_usuario({actualizar_login}) {
    const [datos, setdatos] = useState({
        nombre:"",
        apellido:"",
        edad:0,
        cedula:"",
        correo:"",
        ciudad:"barranquilla",
        localidad:"norte",
        contra:"",
        contra_2:"",
        op:"crear_usuario"
    })


    const actualizar=(event)=>{
          
        setdatos({
          ...datos,
          [event.target.name]:event.target.value
        })
        

    }

    const enviar_datos= async(event)=>{
        event.preventDefault()
        console.log(datos)
        
        

        

        const data = new FormData()
        data.append("datos",JSON.stringify(datos))

      const res= await  fetch('http://localhost/votacion2/',{
            method: 'POST',
            mode: 'cors',
            body:data
        })

        const json= await res.json()
        debugger
        if(json.error==""){
            alert("se inserto el ususario con el id"+json.respuesta)
        }
        document.getElementById("login").reset();
        actualizar_login(true)


    }
    return (
        <div>
            <div className="row">
                <div className="col-8 offset-2  ">

                    <div className="card mt-5">
                        <div className="card-body bg-primary">
                            <div className="card-header">
                                <h3 className="text-center">Login</h3>
                            </div>
                            <form id="login" onSubmit={enviar_datos}>
                                <div className="form-gruop col-12">
                                    <div className="row">
                                        <div className="col-4">
                                            <h5>Nombre</h5>
                                            <input type="text" className="form-control" id="nombre" name="nombre" onChange={actualizar}/>
                                        </div>
                                        <div className="col-4">
                                            <h5>Apellido</h5>
                                            <input type="text" className="form-control" id="apellido" name="apellido" onChange={actualizar} />
                                        </div>
                                        <div className="col-4">
                                            <h5>Edad</h5>
                                            <input type="number" className="form-control" id="edad" name="edad" onChange={actualizar} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-gruop col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <h5>Cedula</h5>
                                            <input type="text" className="form-control" id="cedula" name="cedula" onChange={actualizar} />
                                        </div>
                                        <div className="col-6">
                                            <h5>Correo</h5>
                                            <input type="text" className="form-control" id="correo" name="correo" onChange={actualizar} />
                                        </div>
                                       
                                      
                                    </div>
                                </div>
                                <div className="form-gruop col-12">
                                    <div className="row">
                                    <div className="col-6">
                                            <h5>Ciudad</h5>
                                            <select className="form-select" id="ciudad" name="ciudad" onChange={actualizar}>
                                                <option>Barranquilla</option>
                                                <option>Bogota</option>
                                            </select>
                                        </div>
                                       
                                        <div className="col-6">
                                            <h5>Localidad</h5>
                                            <select className="form-select" id="localidad" name="localidad" onChange={actualizar}>
                                                <option>norte</option>
                                                <option>sur</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-gruop col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <h5>Contraseña</h5>
                                            <input type="text" className="form-control" id="contra" name="contra" onChange={actualizar} />
                                        </div>
                                        <div className="col-6">
                                            <h5>Repita Contraseña</h5>
                                            <input type="text" className="form-control" id="contra_2" name="contra_2" onChange={actualizar}/>
                                        </div>
                                    </div>
                                </div>

                                 <input type="submit" value="Crear usuario" className="btn btn-success col-6 offset-3 mt-2" />
                               
                        </form>
                                
                    </div>

                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Crear_usuario
