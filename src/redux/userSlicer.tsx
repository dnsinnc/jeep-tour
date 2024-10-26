import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../types/userTypes";

        


const initialState = {
   authUser: JSON.parse(sessionStorage.getItem("user") || '{}'),
}



export const userSlicer = createSlice({
   name: 'user',
   initialState,
   reducers: {
      addUser: (state, action: PayloadAction<IAuth>) => {
         const authUser = action.payload;
         sessionStorage.setItem("user", JSON.stringify(authUser));
         state.authUser = authUser;
         window.location.reload();
      },
      deleteUser: (state) => {
         window.location.reload()
         sessionStorage.removeItem("user");
         state.authUser = {};
      }
   }
})



export const { addUser, deleteUser } = userSlicer.actions

export default userSlicer.reducer