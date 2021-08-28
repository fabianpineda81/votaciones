import React from 'react'
import {Button, Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Ciudad({ciudad}) {

    return (

        <Card className="col-3">
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{ciudad.nombre}</Card.Title>
                <Card.Text>
                    {ciudad.descripcion}
                 </Card.Text>
            </Card.Body>
            
            <Card.Body>
            
                
               <Button variant="primary">Modificar</Button> 
            </Card.Body>
        </Card>


    )
}

export default Ciudad


function modificar(){
    
}
