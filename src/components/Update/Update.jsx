import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";

const Update = () => {
  // ei data theke _id diye PUT api er fetch call korci
  const userData = useLoaderData();
  console.log("User data from MongoDB:->", userData);
//   navigate after update
const navigate=useNavigate()

  const handleUpdateData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    // update the data to server->DB
    const usr = { name, email };
    console.log("Update form:->", usr);

    // PUT API
    fetch(`http://localhost:5000/users/${userData._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(usr),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("DB response to client:", data);
        if (data.modifiedCount > 0) {
            toast("User data updated!");
            navigate('/users')

        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <form
        onSubmit={handleUpdateData}
        className="w-2/3 mx-auto flex flex-col border-2 border-teal-500 rounded-md "
      >
        <h2 className="text-xl font-semibold text-teal-700">
          Update User details
        </h2>
        <input
          type="text"
          className="border-2 border-teal-200 m-2 p-2 w-1/2 mx-auto rounded-md"
          name="name"
          defaultValue={userData.name}
        ></input>
        <input
          type="email"
          className="border-2 border-teal-200 m-2 p-2 w-1/2 mx-auto rounded-md"
          name="email"
          defaultValue={userData.email}
        ></input>
        <input
          type="submit"
          className="hover:cursor-pointer border-2 border-teal-200 m-2 p-2 bg-slate-100 font-extrabold text-teal-400 w-1/4 mx-auto rounded-md"
          name="update"
          value="Update"
        ></input>
      </form>
    </div>
  );
};

export default Update;
