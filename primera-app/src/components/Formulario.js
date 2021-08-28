import React,{Fragment, useState} from 'react';
const Formulario = () => {

    const [datos,setdatos]=useState({
        nombre:"",
        apellido:""
    })
    const actualizar=(event)=>{
        console.log(event.target.name)
        setdatos({
            ...datos,
            [event.target.name]:[event.target.value]
        })
    }

    const enviar_datos=(event)=>{
        event.preventDefault();

    }

    return ( 
        <Fragment>
                <h1>Formulario</h1>
                <form className="row" onSubmit={enviar_datos}>
                    <div className="col-md-3">
                    <input 
                    placeholder="Ingrese nombre" 
                    className="form-control" 
                    type="text" 
                    name="nombre"
                    onChange={actualizar}
                     />

                    </div>

                    <div className="col-md-3 ">
                    <input 
                    placeholder="ingrese apellido" 
                    className="form-control"
                    type="text" 
                    name="apellido"
                    onChange={actualizar}
                    />

                    </div>
                    <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>

                    </div>
                </form>

                <p>{datos.nombre}</p>
                <p>{datos.apellido}</p>
        </Fragment>
        
     );
}
 
export default Formulario;