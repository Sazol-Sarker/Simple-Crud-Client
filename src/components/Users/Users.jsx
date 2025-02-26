import { useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Users = () => {
    const users=useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-teal-500 text-lg font-bold'>No of Users:{users.length}</h2>
            <p className='text-teal-500 text-md font-bold italic'>Fetched from Mongodb Database via express server using GET READ API</p>
            <ol className='border-2 border-teal-500 list-decimal w-1/2 mx-auto my-5 *:space-y-5'>

            {
                users.map(usr=><li className='text-teal-500 text-lg font-semibold italic' key={usr._id}>{usr.name}</li>)
            }
            </ol>
        </div>
    );
};

export default Users;