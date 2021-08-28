import React,{Fragment} from 'react';


const Saludo = (props) => {
    return (  
        <Fragment>
            <h2>Hola {props.persona}  </h2>
        </Fragment>
    );
}
 
export default Saludo;