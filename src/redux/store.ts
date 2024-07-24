import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import  userReducer from "./userSlicer";


const rootReducer = combineReducers({
   user: userReducer,
   [userApi.reducerPath]: userApi.reducer,
})

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
});