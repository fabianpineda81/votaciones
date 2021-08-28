import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Modal_ingresar_pcs({ mostrar, toggle_ingresar,ingresar_pc,usuarios}) {
    const [datos, setdatos] = useState({
   
        id_usuario:"",
        numero_serie:"",
        estado:"exelente",
        ultimo_mantenimiento:"",
        descripcion:"",
        tipo:"portatil"
    })
    
    const actualizar_informacion =(event)=>{
        
        setdatos({
            ...datos,
            [event.target.name]:event.target.value
        })
        
        
    }
    
    const insertar =(event)=>{
        event.preventDefault()
        if(datos.ultimo_mantenimiento==""){
            alert("conplete los datos")
        }else{
            ingresar_pc(datos)
        }
            /* ingresar_grupo(datos) */
            console.log(datos.ultimo_mantenimiento)

        
           
           
        
        
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
                                    <label for="inputEmail4">Numero de serie</label>
                                    <input type="text" name="numero_serie" class="form-control" id="numero_serie" placeholder="Ingresar Nombre" onChange={actualizar_informacion} />
                                </div>
                                <div class="form-group col">
                                    <label for="inputEmail4">Usurio</label>
                                    <select className="form-select" onChange={actualizar_informacion} name="id_usuario">
                                       <option value="">---</option>
                                        {usuarios.map((usuario,index)=>{
                                          return  <option key={index} value={usuario.id}>{usuario.nombre}</option>
                                        })}
                                    </select>
                                </div>
                                </div>
                                <div class="form-row row">
                                <div className="form-group col">
                                    <label htmlFor="datepicker">ultimo mantenimiento</label>
                                <input id="datepicker" onChange={actualizar_informacion} name="ultimo_mantenimiento" className="form-control" type="date" width="276"  />
                                
                                </div>
                                <div class="form-group col">
                                    <label for="inputEmail4">Tipo</label>
                                    <select onChange={actualizar_informacion} name="tipo" className="form-select">
                                         <option  value="portatil">Portatil</option>
                                         <option  value="mesa">Mesa</option>
                                         
                                    </select>
                                </div>
                                <div class="form-group col">
                                    <label for="inputEmail4">estado</label>
                                    <select onChange={actualizar_informacion} name="estado" className="form-select">
                                         <option  value="exelente">Exelente</option>
                                         <option  value="bueno">bueno</option>
                                         <option  value="medio">medio</option>
                                         <option  value="malo">malo</option>
                                         <option  value="no_sirve">no sirve </option>
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

export default Modal_ingresar_pcs
