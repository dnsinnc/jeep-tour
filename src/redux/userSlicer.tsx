import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../types/userTypes";


interface UserState{
   authUser: IAuth | object,
}

const initialState: UserState = {
   authUser: {},
}



export const userSlicer = createSlice({
   name: 'user',
   initialState,
   reducers: {
      addUser: (state, action: PayloadAction<IAuth>) => {
         state.authUser = action.payload;
         // console.log(action.payload)
      },
      deleteUser: (state) => {
         state.authUser = {};
      }
   }
})



export const { addUser, deleteUser } = userSlicer.actions

export default userSlicer.reducer