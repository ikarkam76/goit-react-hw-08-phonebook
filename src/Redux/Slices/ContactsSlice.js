import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints: builder => ({
    getContactsByLogin: builder.query({
      query: authToken => ({
        url: `/contacts`,
        header: authToken,
      }),
    }),
    editContactById: builder.mutation({
      query: (contactId, editContact, authToken) => ({
        url: `/contacts/${contactId}`,
        header: authToken,
        method: 'PATCH',
        body: {
          name: editContact.name,
          number: editContact.number,
        },
      }),
    }),
    deleteContactById: builder.mutation({
      query: (contactId, authToken) => ({
        url: `/contacts/${contactId}`,
        header: authToken,
        method: 'DELETE',
      }),
    }),
    createContact: builder.mutation({
      query: (newContact, authToken) => ({
        url: `/contacts`,
        header: authToken,
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