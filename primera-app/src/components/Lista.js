import React,{useState,Fragment} from 'react';

const Lista = () => {
    // se crear una constante , el metodo que lo va a modificar y se inicializa 
    const [arraynumero, setNumero] = useState([1,2,3,4,5])
    const [numero,aunmentar]=useState(0);
    const agregar_elemento=()=>{
       setNumero([...arraynumero,6+numero])
       aunmentar(numero+1);
    }
    return ( 
        <Fragment>
            <h2>Listas</h2>
            <button onClick={agregar_elemento}>Agrgar numero</button>

            {       // se usa el .map para recorrer el array y se le pasa la key en esta caso se le pasa el index del arreglo 
                    // que viene siendo el segundo argumento de la funcion 
                arraynumero.map((item,index)=>
                    
                    <p key={index}>{item}-{index}</p> 
                    
                    )
            }
        </Fragment>

     )
}

export default Lista;