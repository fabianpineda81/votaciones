import { Fragment,useState } from "react";
import React from 'react';
import {useForm} from 'react-hook-form'

const FormEjemplo = () => {
    const {register, errors, handleSubmit} = useForm();
    const onsubmit=(data,e)=>{
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])

        e.target.reset()
        

    }

    const [Entradas, setEntradas] = useState([])

    return (  
        <Fragment>
            <h1>ejemplo</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input
                name="titulo"
                placeholder="Ingrese titulo"
                className="form-control mb-2"
                ref={register({
                    required:{value:true,message:'Campo obligatorio'},
                    minLength:{value:2, message:'minimo 2 letras'}
                })

                }/>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>

                <input
                name="descripcion"
                placeholder="Ingrese descripcion "
                className="form-control mb-2"
                ref={register({
                    required:{value:true,message:'Campo obligatorio'},
                    minLength:{value:2, message:'minimo 2 letras'}
                })
                }
                />

                
                    {errors.descripcion &&
                        <span className="text-danger text-small d-block mb-2">
                                {errors.descripcion.message}
                        </span>
                    }
                
                <button className="btn btn-primary">Enviar</button>
                
            </form>
            <ul>
                {
                Entradas.map(item=>{
                    return <li>{item.titulo}-{item.descripcion}</li>
                })}
            </ul>
        </Fragment>

    );
}
 
export default FormEjemplo;