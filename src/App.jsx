import { toast } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {


const handleAddUser=(e)=>{
e.preventDefault();
const form=e.target;
const name=form.name.value 
const email=form.email.value 

// making user obj
const user={name,email}

// sending to server
// POST api
fetch('http://localhost:5000/user',{
method:"POST",
headers:{'content-type':'application/json'},
body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
  console.log("Post api response to client: ",data)
  if(data.acknowledged)
  {
   
    return toast(`User with ID: ${data.insertedId} created!`)
  }
  else 
  return toast(`User creation failed!`)
})
}

  return (
    <>
      <title>Simple MongoDB Crud</title>
      <h1 className="text-2xl font-semibold text-teal-500">Simple CRUD</h1>
      <Navbar></Navbar>

      <form onSubmit={handleAddUser} className="w-1/2 mx-auto flex flex-col border-2 border-teal-500 *:my-5 items-center">
        <input type="text"  className="border-2 border-blue-500 my-2 p-2 rounded-md" name="name" placeholder="Enter name"/>
        <input type="email"  className="border-2 border-blue-500 my-2 p-2 rounded-md" name="email" placeholder="Enter email"/>
        <input type="submit" className="border-2 my-4 border-blue-500 p-2 text-gray-100 hover:cursor-pointer bg-teal-400 rounded-md" name="submit" value="Add user" />
      </form>
    </>
  );
}

export default App;
