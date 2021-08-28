import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Modal_ingresar_mantenimiento_obligatorio({ mostrar, toggle_ingresar,ingresar_grupo }) {
  
const [datos, setdatos] = useState({
   
    nombre:"",
    descripcion:"",
    tipo:"software"
})

const actualizar_informacion =(event)=>{
    
    setdatos({
        ...datos,
        [event.target.name]:event.target.value
    })
    
}

const insertar =(event)=>{
    event.preventDefault()
    ingresar_grupo(datos)
    
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
                                <label for="inputEmail4">Tipo</label>
                               <select name="tipo" className="form-select" onChange={actualizar_informacion}>
                                   <option value="software" selected>Software</option>
                                   <option value="harware" selected>hardware</option>
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

export default Modal_ingresar_mantenimiento_obligatorio
