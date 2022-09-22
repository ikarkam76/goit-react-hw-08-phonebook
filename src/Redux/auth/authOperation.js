import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(`/users/signup`, credentials);
  return data;
  } catch (error) {
    console.log(error)
  }
})



// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   endpoints: builder => ({
//     singUpUser: builder.mutation({
//       query: credentials => ({
//         url: `/users/signup`,
//         method: 'POST',
//         body: {
//           name: credentials.name,
//           email: credentials.email,
//           password: credentials.password,
//         },
//       }),
//     }),
//   }),
// }); 

// export const { useSingUpUserMutation } = userApi;