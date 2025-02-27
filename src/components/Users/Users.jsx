import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";
import { useState } from "react";

const Users = () => {
  //   receive server data
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  //DELETE api
  const handleDelete = (id) => {
    console.log("CLient handleDelete: id->", id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount == 1) {
          toast("User deleted");
          // filter the deleted user out
          const remainingUsers = users.filter((usr) => usr._id !== id);
          setUsers(remainingUsers);
        }
      });
  };



  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-teal-500 text-lg font-bold">
        No of Users:{users.length}
      </h2>
      <p className="text-teal-500 text-md font-bold italic">
        MongoDB via express server using CRUD : POST(1), GET(1/1+), PUT(1), DELETE(1) API
      </p>
      <ol className="border-2 border-teal-500 list-disc w-2/3 mx-auto my-5 *:space-y-5">
        {users.map((usr) => (
          <div className="flex justify-between items-center border-2 border-teal-500 my-2" key={usr._id}>
            <div className="flex items-center space-x-4 w-3/4 mx-2 text-teal-500 text-lg font-semibold italic  justify-between">
              <p>{usr.name}: {usr.email} :: </p>
              <p>{usr._id}</p>
            </div>
            <div className="flex justify-end w-1/4 mx-2 gap-x-5 items-center">

            <Link to={`/users/${usr._id}`}>
            <button  className="btn">Update</button>
            </Link>

            <button onClick={() => handleDelete(usr._id)} className="btn">
              X
            </button>
            </div>
            
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Users;
