import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";

const Users = () => {
//   receive server data
    const users = useLoaderData();

    //DELETE api
  const handleDelete=(id)=>{
    console.log("CLient handleDelete: id->",id);
    fetch(`http://localhost:5000/users/${id}`,
        {
            method:'DELETE'
        }
    )
    .then(res=>res.json())
    .then(data=>{

        console.log(data)
        if(data.deletedCount==1)
            toast('User deleted')
    })

}


  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-teal-500 text-lg font-bold">
        No of Users:{users.length}
      </h2>
      <p className="text-teal-500 text-md font-bold italic">
        Fetched from Mongodb Database via express server using GET READ API
      </p>
      <ol className="border-2 border-teal-500 list-disc w-1/2 mx-auto my-5 *:space-y-5">
        {users.map((usr) => (
          <li
            className="text-teal-500 text-lg font-semibold italic flex justify-between border-2 border-blue-400"
            key={usr._id}
          >
            {usr.name} {usr._id}
            <button onClick={()=>handleDelete(usr._id)} className="btn">X</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Users;
