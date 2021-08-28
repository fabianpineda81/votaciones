import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form'

const HookForm = () => {

    const {register, errors, handleSubmit} = useForm();
    const onsubmit=(data,e)=>{
        console.log(data)
        e.target.reset()
    }


    return ( 
     <Fragment>

        <form onSubmit={handleSubmit(onsubmit)}>
            <input
                name="titulo"
                className="form-control my-2"
                ref={register({
                    required:{value:true,message:'titulo abligatorio'}

                })}
            />

            <span className="text-danger text-small d-block mb-2">
               {errors?.titulo?.message}
            </span>
            <button className="btn btn-primary"> enviar</button>
        </form>
    </Fragment>
    );
}
 
export default HookForm;