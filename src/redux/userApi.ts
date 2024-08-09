import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuth, IRegister } from "../types/userTypes";

export const userApi = createApi({
   reducerPath: 'userApi',
   tagTypes: ['User'],
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:8000',
   }),
   endpoints: (build) => ({
      registerUser: build.mutation<void, IRegister>({
         query: (body: IRegister) => ({
            url: 'user/register',
            method: 'POST',
            body,
         }),
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
         }),
      }),
      changePass: build.mutation({
         query: ({ changePassData, authUser }) => ({
            url: 'user/change-password',
            method: 'POST',
            headers: {
               'Authorization': 'Basic ' + btoa(`${authUser.username}:${authUser.password}`),
            },
            body: changePassData,
         }),
      }),
      getUser: build.query({
         query: (authUser) => ({
            url: 'user/me/profile',
            headers: {
               'Authorization': 'Basic ' + btoa(`${authUser.username}:${authUser.password}`),
            },
         }),
         providesTags: [{ type: 'User', id: 'USER' }],
      }),
      addProfileAvatar: build.mutation({
         query: ({ avatar, authUser }) => ({
            url: 'user/update/avatar',
            method: 'PATCH',
            headers: {
               'Authorization': 'Basic ' + btoa(`${authUser.username}:${authUser.password}`),
               "Cache-Control": "no-cache, no-store, must-revalidate",
               'Pragma': 'no-cache',
               'Expires': '0',
            },
            body: avatar,
         }),
         invalidatesTags: [{ type: 'User', id: 'USER' }],
      }),
      deleteUser: build.mutation({
         query: ({ params, body, authUser }) => ({
            url: `/user/delete/me/profile/?password=${params.password}`,
            method: 'DELETE',
            headers: {
               'Authorization': 'Basic ' + btoa(`${authUser.username}:${authUser.password}`),
            },
            body
         }),
      }),
   }),
});

export const {
   useRegisterUserMutation,
   useUserAuthMutation,
   useChangePassMutation,
   useGetUserQuery,
   useAddProfileAvatarMutation,
   useDeleteUserMutation,
} = userApi;