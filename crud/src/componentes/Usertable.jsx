import React from 'react';

const Usertable = ({ users,deleteUser ,setediting,ediRow}) => {
  console.log(users);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

        { users.length>0?
        users.map((user) => 
          
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button className="button muted-button" onClick={()=>ediRow(user)}>Editar</button>
                                                            {/* hay que hacer esta empanda para poder parar un parametro  */}
                <button className="button muted-button" onClick={()=>{deleteUser(user.id)}}>Delete</button>
              </td>
            </tr>
          
             ):(<tr aria-colspan={3}>
                 <td> No hay usuarios</td>
             </tr>) 
             }
      </tbody>
    </table>
  );
};
 
export default Usertable;