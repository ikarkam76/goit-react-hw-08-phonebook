import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from 'Redux/Auth/authSlice';
import { contactsApi } from 'Redux/Contacts/ContactsApi';



const persistAuthConfig = {
  key: 'auth',
  storage,
  whitlist: ['token'],
};


export const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});


export const persistor = persistStore(store);
setupListeners(store.dispatch);