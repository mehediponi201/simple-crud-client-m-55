
import './App.css'

function App() {
const handleUser = e =>{
e.preventDefault();
const name = e.target.name.value;
const email = e.target.email.value;
const user = {name,email};
console.log(user);
fetch('http://localhost:5000/users',{
  method: 'POST',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify(user)
})
.then(res => res.json())
.then(data =>{
  console.log(data);
  if(data.insertedId)
  {
    alert('Users added successfully');
  }
})
}
  return (
    <>
      <h1>Simple CRUD Operation From Client side</h1>
      <form onSubmit={handleUser}>
        <input type="text" name='name' /> <br />
        <input type="email" name='email' /> <br />
        <button>Add User</button>
      </form>
    </>
  )
}

export default App
