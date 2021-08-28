import React from 'react';
import{useForm} from 'react-hook-form'

const EditUserForm = ({addUser,currentUser,updateUser }) => { 

    const {register,errors,handleSubmit,setValue}=useForm({
        defaultValues:currentUser
    });

        setValue('name',currentUser.name)
        setValue('username',currentUser.username)

    const onsubmit=(data,e)=>{  
        console.log(data)
        data.id=currentUser.id
        
        updateUser(currentUser.id,data)
        e.target.reset()
    }
    return (  

        <form onSubmit={handleSubmit(onsubmit)}>
            <label>Name</label>
            <input type="text" name="name"
             ref={register({
                required:{value:true,message:'nombre abligatorio'}

            })}
            /* value={currentUser.name}  */ />
            <label>Username</label>
            <input type="text" name="username" 
             ref={register({
                required:{value:true,message:'usuario abligatorio'}

            })}
            /* value={currentUser.username} */
            />

            <div>
                {errors?.name?.message}
                <br/>
                {errors?.username?.message}
            </div>
            <button >Editar usuario</button>
        </form>
    );
}
 
export default EditUserForm;