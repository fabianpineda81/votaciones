import React, { useState, Fragment } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Ciudad from './Ciudad';


function Ciudades() {
    const [cuidades, setcuidades] = useState([])
    const data = new FormData();
    React.useEffect(()=>{
        buscar_cuidades();
    },[])

   
    const buscar_cuidades =async()=>{
        const datos = {op:"buscar_cuidades"}
        data.append("datos",JSON.stringify(datos))
        const respuesta =await fetch("http://localhost/votacion2/",{
            method:"post",
            mede:'cors',
            body:data
        })

        const json = await respuesta.json();
        if(json.error==""){
            setcuidades(json.respuesta)
        }
        
    }

    return (
        <Fragment>
        <div className="row">
            <div className="col-4 offset-4">
            { Modal_agregar_ciudad(buscar_cuidades)}
            </div>
           
        </div>
        <div className="row">
            {
                cuidades.map((ciudad,index)=>{
                   return <Ciudad ciudad={ciudad}/>
                })
            }
        </div>

        </Fragment>
        

    )
}

export default Ciudades

function Modal_agregar_ciudad(buscar_cuidades) {
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);

    const [ciudad, setciudad] = useState({
        nombre: "",
        descripcion: "",
        op:"insertar_ciudad"
    })
    const actualizar_campos = (event) => {
        setciudad({
            ...ciudad,
            [event.target.name]: event.target.value
        })
    }



    
    const enviar_datos=async (event)=>{
        event.preventDefault()
        console.log(ciudad)


        const data= new FormData();
        data.append("datos",JSON.stringify(ciudad))

        const respuesta =await fetch("http://localhost/votacion2/",{
            method:"post",
            mode:'cors',
            body:data
        })

        const json= await respuesta.json();
        
        if(json.error==""){
            alert("se inserto la ciudad con el id:"+json.respuesta)
        }
        handleClose();

        buscar_cuidades();
    }

    return (
        <Fragment>
            <Button variant="primary" onClick={handleShow}>Ingresar Ciudad</Button>

            {/* esta es la variable que maneja si se muestra o no  */}
            <Modal show={show2} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Ingresar Localidad</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <Form onSubmit={enviar_datos}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder="Entre el nombre" name="nombre" onChange={actualizar_campos} />
                           
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control  as="textarea" rows={3} name="descripcion"  onChange={actualizar_campos}></Form.Control>
                          
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                </Button>
                    </Form>
                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    
                </Modal.Footer>
            </Modal>
        </Fragment>

    )
}
