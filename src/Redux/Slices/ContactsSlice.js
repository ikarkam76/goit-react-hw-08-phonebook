import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContactsByLogin: builder.query({
      query: () => ({
        url: `/contacts`,
        providesTags: ['Contacts'],
      }),
    }),
    editContactById: builder.mutation({
      query: ({ name, number, contactId }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: {
          name: name,
          number: number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContactById: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name: name,
          number: number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});


export const { useGetContactsByLoginQuery, useDeleteContactByIdMutation, useCreateContactMutation, useEditContactByIdMutation } = contactsApi;