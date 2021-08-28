import React, { useState, Fragment } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';



function Localidades() {

   
    return (
        Agregar_localidad()
    )
}

export default Localidades






function Agregar_localidad(){

    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    
    const enviar_datos=(event)=>{
        event.preventdefault()
    }
    return(
        <Fragment>

        <Button variant="primary" onClick={handleShow}>
            Ingresar Localidad
    </Button>
        {/* esta es la variable que maneja si se muestra o no  */}
        <Modal show={show2} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Ingresar Localidad</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <Form onSubmit={enviar_datos}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Entre el nombre" name="nombre" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                         </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                   
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select">
                            <option value="3">barranquilla</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
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
                    <Button variant="primary" onClick={handleClose}>
                        Guardar
        </Button>
                </Modal.Footer>
        </Modal>
    </Fragment>
    )

}
