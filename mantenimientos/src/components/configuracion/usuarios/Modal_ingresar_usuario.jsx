import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Modal_ingresar_usuario({ mostrar, toggle_ingresar,ingresar_usuario,usuarios}) {
   
    const [datos, setdatos] = useState({
   
       cedula:"",
       rol:"ADMINISTRADOR",
       nombre:"",
       apellido:"",
       correo:"",
       username:"",
       contrasena:"",
       contrasena2:""
    })
    
    const actualizar_informacion =(event)=>{
        
        setdatos({
            ...datos,
            [event.target.name]:event.target.value
        })

        
        
    }
    
    const insertar =(event)=>{
        event.preventDefault()
        console.log(datos)
        
        ingresar_usuario(datos) 
        
           
           
        
        
    }
   
    
    
    
        return (
            <div>
                <Modal show={mostrar} onHide={toggle_ingresar}  size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={insertar}>
                            <div class="form-row row">
                                <div class="form-group col">
                                    <label for="inputEmail4">Cedula</label>
                                    <input type="text" name="cedula" class="form-control" id="numero_serie" placeholder="Ingresar Nombre" onChange={actualizar_informacion} />
                                </div>
                                <div class="form-group col">
                                    <label for="inputEmail4">Rol</label>
                                    <select className="form-select" onChange={actualizar_informacion} name="rol">
                                       <option value="ADMINISTRADOR">Administrador</option>
                                       <option value="USUARIO">usuario</option>
                                    </select>
                                </div>
                                <div class="form-group col">
                                    <label for="inputEmail4">Nombre</label>
                                    <input type="text" name="nombre" class="form-control" id="numero_serie" placeholder="Ingresar Nombre" onChange={actualizar_informacion} />
                                </div>
                            </div>
                            <div class="form-row row">
                                <div class="form-group col">
                                    <label for="inputEmail4">Apellido</label>
                                    <input type="text" name="apellido" class="form-control" id="numero_serie" placeholder="Ingresar Nombre" onChange={actualizar_informacion} />
                                </div>
                                <div class="form-group col">
                                    <label for="inputEmail4">Correo</label>
                                    <input type="email" name="correo" class="form-control" id="numero_serie" placeholder="Ingresar Nombre" onChange={actualizar_informacion} />
                                </div>
                               
                                <div class="form-group col">
                                    <label for="inputEmail4">Nombre de usuario</label>
                                    <input type="text" name="nombre_usuario" class="form-control" id="numero_serie" placeholder="Ingresar Nombre" onChange={actualizar_informacion} />
                                </div>
                            </div>
                            <div class="form-row row">
                                <div class="form-group col">
                                    <label for="inputEmail4">Contraseña</label>
                                    <input type="text" name="contrasena" class="form-control" id="numero_serie" placeholder="Ingresar Nombre" onChange={actualizar_informacion} />
                                </div>
                               
                                <div class="form-group col">
                                    <label for="inputEmail4">Repita contraseña</label>
                                    <input type="text" name="contrasena2" class="form-control" id="numero_serie" placeholder="Ingresar Nombre" onChange={actualizar_informacion} />
                                </div>
                            </div>
                            
                          
                            <button type="submit" class="btn btn-primary">Ingresar</button>
                        </form>
    
    
    
    
    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={toggle_ingresar}>
                            Close
              </Button>
                        <Button variant="primary" onClick={toggle_ingresar}>
                            Save Changes
              </Button>
                    </Modal.Footer>
                </Modal>
    
            </div>
        )
        
}

export default Modal_ingresar_usuario

