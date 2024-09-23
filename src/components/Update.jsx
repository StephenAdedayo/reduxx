import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../slice/userReducer';



const Update = () => {
    const {id} = useParams()
    const users = useSelector((state) => state.users)
    const existingUser = users.filter(f => f.id == id)
    const {name, email} = existingUser[0]
    
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);

    const dispatch = useDispatch()

    const navigate = useNavigate()
  
   const handleUpdate = (e) => {
     e.preventDefault()

     dispatch(updateUser({
        id:id,
        name:uname,
        email:uemail
     }))

     navigate('/')
   }


  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleUpdate}
        
        className="bg-gray-100 p-10 max-w-[500px] w-full rounded-lg "
      >
        <h1 className="text-indigo-700 text-xl border-b-4 border-indigo-700 w-fit">
          Update User
        </h1>{" "}
        <br /> <br />
        <input
        value={uname}
        onChange={(e) => setName(e.target.value)}
          className="w-full outline-none border p-3 rounded-lg"
          type="text"
          placeholder="name"
        />{" "}
        <br /> <br />
        <input
        value={uemail}
        onChange={(e) => setEmail(e.target.value)}
          className="w-full outline-none border p-3 rounded-lg "
          type="email"
          placeholder="email"
        />{" "}
        <br /> <br />
        <button
          type="submit"
          className="bg-indigo-700 px-6 py-3 w-fit text-white rounded-lg hover:bg-indigo-500 hover:tracking-tight"
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default Update
