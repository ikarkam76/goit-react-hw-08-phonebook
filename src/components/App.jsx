import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from "Redux/Auth1/authOperation";
import { PrivateRoute } from "components/PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginModal } from "./Modals/LogInModal";
import { RegistrationModal } from 'components/Modals/RegisterModal';
import { Contacts } from '../Pages/Contacts';
import { ContactsAppBar } from "./AppBar";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(fetchCurrentUser())}, [dispatch]);
  return (
    <Routes>
      <Route exact path="/" element={<ContactsAppBar />}>
        <Route
          path="registration"
          element={
            <PublicRoute>
              <RegistrationModal />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginModal />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ContactsAppBar />} />
      </Route>
    </Routes>
  );
};
