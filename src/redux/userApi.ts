import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuth, IRegister, IChangePass } from "../types/userTypes";


interface ChangePassArgs {
   authUser: IAuth;
   changePassData: IChangePass;
}

export const userApi = createApi({
   reducerPath: 'userApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:8000'
   }),
   endpoints: (build) => ({
      registerUser: build.mutation({
         query: (body: IRegister) => ({
            url: 'user/register',
            method: 'POST',
            body,
         })
      }),
      userAuth: build.mutation({
         query: (body: IAuth) => ({
            url: 'user/auth',
            method: 'POST',
            headers: {
               'Authorization': 'Basic ' + btoa(`${body.username}:${body.password}`),
            },
            credentials: 'include',

            body,
         })
      }),
      changePass: build.mutation({
         query: ({ changePassData, authUser }: ChangePassArgs) => ({
            url: 'user/change-password',
            method: 'POST',
            headers: {
               'Authorization': 'Basic ' + btoa(`${authUser.username}:${authUser.password}`),
            },
            body: changePassData
         }),
      }),
      getUser: build.query({
         query: (authUser) => ({
            url: 'user/me/profile',
            headers: {
               'Authorization': 'Basic ' + btoa(`${authUser.username}:${authUser.password}`),
            },
         })
      }),
      addProfileAvatar: build.mutation({
         query: ({ formData, authUserData }) => ({
            url: 'user/update/avatar',
            method: 'PUT',
            headers: {
               'Authorization': 'Basic ' + btoa(`${authUserData.username}:${authUserData.password}`),
            },
            body: formData,

         })
      })
   })

})




export const { useRegisterUserMutation, useUserAuthMutation, useChangePassMutation, useGetUserQuery, useAddProfileAvatarMutation } = userApi;