import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name,email);
        const updatedUser = {name,email};
        // Update Data ta k client side theke server side e put kortechi...
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
        method: 'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0)
            {
             alert('Successfully data modified');
            }
        })
    }
    return (
        <div>
            <h4>Update Information of:{loadedUser.name}</h4>
            <form onSubmit={ handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name}/> <br />
                <input type="email" name="email" defaultValue={loadedUser?.email}/> <br />
                <button>Update</button>
            </form>
        </div>
    );
};

export default Update;