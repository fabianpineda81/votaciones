import React, { useState } from 'react';
import Usertable from'./componentes/Usertable'
import {v4 as uuidv4} from 'uuid'
import AddUserForm from './componentes/AddUserForm';
import EditUserForm from './componentes/EditUserForm'


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  const addUser=(user)=>{
    user.id= uuidv4();
    setUsers([...users,user])
  }

  
  const deleteUser = (id) => {
    console.log(id);
    const res = users.filter((user) => user.id !== id);
    /* console.log(res) */

    setUsers(res);
  };

  const [editing, setediting] = useState(false);

  const [users, setUsers] = useState(usersData);

  const [currentUser,setcurrentUser]=useState({
    id:null,
    name:'',
    username:''
  });

  
  // aca es donde se edita el row 
  // la variable  que perimite la edicion se pasa a true y se pasa el usuario que se va a modificar
  const ediRow=(user)=>{
    setediting(true);
    setcurrentUser({
      id:user.id,
      name:user.name,
      username:user.username 
    })
  }
  // esto es la funcion de actualizar el usuario  
  const updateUser=(id,updateUser)=>{
    setediting(false)
   setUsers(users.map((user)=>(user.id == id? updateUser:user )))

    
  }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>edit user</h2>
              <EditUserForm  currentUser={currentUser}
              updateUser={updateUser}/>
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <Usertable users={users} deleteUser={deleteUser} setediting={setediting} ediRow={ediRow}></Usertable>
        </div>
      </div>
    </div>
  );
}

export default App;
