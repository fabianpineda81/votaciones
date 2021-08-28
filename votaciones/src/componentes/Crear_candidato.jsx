import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'


function Crear_candidato() {
    const {register, errors, handleSubmit} = useForm();

    const onsubmit=(data)=>{
        console.log(data)

    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input
                type="text"
                name="nombre"
                /* aca se tiene que poner el la referencia */
                ref={
                    register({
                        /* esto es para que sea requerido y se le manda el mensaje  */
                        required:{value:true,message:'Titulo obligatorio'}
                    })
                }
                />

<span className="text-danger text-small d-block mb-2">
    {errors.usuario && errors.usuario.message}
</span>

<span className="text-danger text-small d-block mb-2">
    {errors?.email?.message}
</span>
                <input type="submit" value="enviar"/>
            </form>

        </Fragment>
            
        
    )
}

export default Crear_candidato
