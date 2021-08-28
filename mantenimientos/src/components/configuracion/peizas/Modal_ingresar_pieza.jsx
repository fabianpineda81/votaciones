import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Modal_ingresar_pieza({ mostrar, toggle_ingresar,ingresar_pieza,grupos }) {

    const [datos, setdatos] = useState({
        id_grupo:"",
        nombre:"",
        descripcion:""
    })
    
    const actualizar_informacion =(event)=>{
        
        setdatos({
            ...datos,
            [event.target.name]:event.target.value
        })
        
        
    }

    
    
    const insertar =(event)=>{
        event.preventDefault()
        if(datos.id_grupo==""){
            alert("tiene que escoger un grupo")
        }else{
            ingresar_pieza(datos)
        }

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
                                <label for="inputEmail4">Nombre</label>
                                <input type="text" name="nombre" class="form-control" id="inputEmail4" placeholder="Ingresar Nombre" onChange={actualizar_informacion} />
                            </div>
                            <div class="form-group col">
                                <label for="inputEmail4">Grupo pieza</label>
                                <select className="form-select"  name="id_grupo" id="id_grupo" onChange={actualizar_informacion} >
                                    
                                    {
                                        grupos.map((grupo,index)=>{
                                           
                                           return <option key={index}  value={grupo.id}>{grupo.nombre}</option>

                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group mt-4 mb-3">
                            <label for="inputEmail4">descripcion</label>
                                <textarea name="descripcion" id="descripcion" className="form-control" cols="10" rows="3" value={datos.descripcion} onChange={actualizar_informacion} placeholder="ingresa descripcion"/>
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

export default Modal_ingresar_pieza
