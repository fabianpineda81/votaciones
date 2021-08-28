import React, { Fragment, useState } from 'react';
import {Link} from "react-router-dom";
const Nosotros = () => {

  

    const [equipo,SetEquipo]= useState([])
    
    const obtenerDatos= async()=>{
       const data = await fetch('https://jsonplaceholder.typicode.com/users/')
       const usuarios =await data.json() 
       
       
       SetEquipo(usuarios)
        console.log(equipo) 


    }

    // esta funcion indica que es lo que tiene que hacer despues de que se pinte 
    React.useEffect(()=>{
        // si ponemso esto asi puede que pase un ciclo infinito al usar el estate 
        document.title="Nosotros"
        obtenerDatos()
        
      //para que se ejecute una sola vez simplemente tenemos los corchetes depues de la coma  
    },[])

    


        return (
        <Fragment>
            <h1>Nosotros</h1>
            <ul>
                {
                equipo.map((item)=>{
                   return <li key={item.id}> <Link to={`/nosotros/${item.id}`}>{item.name}</Link></li>     
                })
                
                }
            </ul>
        </Fragment>
      );
}
 
export default Nosotros;