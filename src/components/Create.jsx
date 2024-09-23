import React, { useState } from "react";
import { addUser } from "../slice/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users)
  const navigate = useNavigate()

 const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
    navigate('/')
 }


  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-10 max-w-[500px] w-full rounded-lg "
      >
        <h1 className="text-indigo-700 text-xl border-b-4 border-indigo-700 w-fit">
          Add New User
        </h1>{" "}
        <br /> <br />
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
          className="w-full outline-none border p-3 rounded-lg"
          type="text"
          placeholder="name"
        />{" "}
        <br /> <br />
        <input
        value={email}
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
