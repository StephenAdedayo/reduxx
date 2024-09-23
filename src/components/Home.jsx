import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../slice/userReducer';



const Home = () => {

const users = useSelector((state) => state.users)

const dispatch = useDispatch()

const handleDelete = (id) => {
      dispatch(deleteUser({id:id}))
}


  return (
    <div className='px-40'>
      <h2>Crud App with JSON Server</h2>
     
     <Link to='/create'>
     <button className='my-3 bg-green-700 text-white p-2 rounded-lg'>Create +</button>
     </Link>

     <table className='w-[500px]'>

     <thead className='w-full'>
      <tr className='w-full'> 
    
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>




      </tr>


      </thead>

    <tbody className=''>
   {users.map((user, index) => (
    <tr key={index} className=''>
   <td>{user.id}</td>
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td className='space-x-5'>
    <Link to={`/update/${user.id}`}>
    <button className='bg-blue-700 text-white p-2 rounded-lg'>Edit</button>
    </Link>
   
   <button onClick={() => handleDelete(user.id)} className='bg-red-500 text-white p-2 rounded-lg'>Delete</button>


  </td>
  

    </tr>
   ))}
    </tbody>





     </table>
    </div>
  )
}

export default Home
