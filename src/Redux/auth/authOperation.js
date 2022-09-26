import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
}

export const register =
  createAsyncThunk('auth/register', async credentials => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      alert(error.message);
    }
  }) 

  export const logIn = createAsyncThunk(
    'auth/register',
    async credentials => {
      try {
        const { data } = await axios.post(`/users/login`, credentials);
        token.set(data.token);
        return data;
      } catch (error) {
        alert(error.message);
      }
    }
  ); 

  export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
      await axios.post(`/users/logout`);
      token.unset();
    } catch (error) {
      alert(error.message);
    }
  }); 

export const fetchCurrentUser = createAsyncThunk('auth/fetch', async (_, thunkApi) => {
  const persistedToken = thunkApi.getState().auth.token;
  if (persistedToken === null) {
    return thunkApi.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    alert(error.message);
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