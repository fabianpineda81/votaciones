import React,{useState,Fragment} from 'react';


//sfc para crear el componente 

const Contador = () => {
   
     // "numero" es el nombre del estado y el segundo va hacer la funcion que la modifica 
     // lo que esta entre parentesis en como se inicializa el estado 
   const [numero,setNumero]=useState(0);

   const aunmentar = ()=>{
       console.log("mediste un click")
       setNumero(numero+1)
   }
   
    return (
        // solo puedo devolver un elemento html 
        // los fragemten se usan como envoltorios el frament no se pinta en html como si lo hace un div 
        <Fragment>
                <h3> mi primer componente {numero} </h3>
                <button onClick={aunmentar}>Aunmentar   </button>          
        </Fragment >
        
     );
}
 
export default Contador;