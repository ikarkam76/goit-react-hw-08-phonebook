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
  endpoints: builder => ({
    getContactsByLogin: builder.query({
      query: () => ({
        url: `/contacts`,
      }),
    }),
    editContactById: builder.mutation({
      query: (contactId, editContact) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: {
          name: editContact.name,
          number: editContact.number,
        },
      }),
    }),
    deleteContactById: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
    }),
    createContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
    }),
  }),
});


export const { useGetContactsByLoginQuery, useDeleteContactByIdMutation, useCreateContactMutation, useEditContactByIdMutation } = contactsApi;