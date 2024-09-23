import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name:'stephen alu',
        email:'stephenalu@gmail.com',
        id:1
    },

    {
        name:'stephen ayo',
        email:'stephenayo@gmail.com',
        id:2
    },

    {
        name:'stephen steve',
        email:'stephensteve@gmail.com',
        id:3
    },
]

export const userSlice = createSlice({
    name:'users',
    initialState: initialState,
    reducers:{
         addUser: (state, action) => {
            state.push(action.payload)
         },

         updateUser: (state, action) => {
          const {id, name, email} = action.payload
          const uu = state.find(user => user.id == id)
          if(uu){
            uu.name = name
            uu.email = email
          }
         },


         deleteUser : (state, action) => {
            const {id} = action.payload
            const uu = state.find(user => user.id == id)

            if(uu){
             return state.filter(f => f.id !== id)
             
            }
         }
    }
})


export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer