import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const[users,setUsers] = useState(loadedUsers);

    //Delete user
    const handleDeleteUser = id =>{
     console.log('delete this id',id);
     fetch(`http://localhost:5000/users/${id}`,{
        method: 'DELETE'
     })
     .then(res => res.json())
     .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
            alert('Successfully deleted user');
            const remainingUser = users.filter(user => user._id !== id);
            setUsers(remainingUser);
            
        }
     })
    }
    return (
        <div>
            {/* Read users */}
            <h4>Total Users number:{users.length}</h4>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} : {user._id}
                    {/* Update user */}
                    <NavLink to={`/users/${user._id}`}><button>Update</button></NavLink>
                    <button onClick={()=>handleDeleteUser(user._id)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;