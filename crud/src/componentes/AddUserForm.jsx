import React from 'react';
import{useForm} from 'react-hook-form'

const AddUserForm = ({addUser}) => {
    const {register,errors,handleSubmit}=useForm();


    const onsubmit=(data,e)=>{  
        console.log(data)
        addUser(data)
        e.target.reset()
        
    }
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <label>Name</label>
            <input type="text" name="name"
             ref={register({
                required:{value:true,message:'nombre abligatorio'}

            })}  />
            <label>Username</label>
            <input type="text" name="username" 
             ref={register({
                required:{value:true,message:'usuario abligatorio'}

            })}
            />

            <div>
                {errors?.name?.message}
                <br/>
                {errors?.username?.message}
            </div>
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;