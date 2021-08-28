import React, { Fragment, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect, useHistory, useLocation
} from "react-router-dom";
import Candidato from './Candidato';
import Detalle_candidato from './Detalle_candidato';
import Header from './Header'

function Candidatos() {
    React.useEffect(()=>{
        buscar_cantidados();
    },[])

    const [candidatos, setcandidatos] = useState([])

    const buscar_cantidados=async()=>{


        const datos= {op:"buscar_candidatos"}
        const form= new FormData();

        form.append("datos", JSON.stringify(datos))

        const respuesta= await  fetch('http://localhost/votacion2/',{
            method: 'POST',
            mode: 'cors',
            body: form
        })

       

        const json=await respuesta.json();

        if(json.error==""){
        setcandidatos(json.respuesta)
        console.log(candidatos)
        
        }
        






    }

    const mostrar= ()=>{
        console.log(candidatos)
        const hola= candidatos;
        debugger
    }
    return (
        <Fragment>
        <div className="row">
            <div className="col-3">
            <Link to="/crear_candidato" className="btn btn-primary ">Agregar Candidato</Link>

            </div>
         </div> 
         <div className="row">  
            
        {
                candidatos.map((candidato,index)=>{
                  return(  
                  
                      <Candidato key={index} candidato={candidato}/>

                    
                  
                  )
                
                    })
        }
          

        </div>
        
        </Fragment>
    )
  
}

export default Candidatos
