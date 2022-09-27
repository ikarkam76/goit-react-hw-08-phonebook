import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from "Redux/auth/authOperation";
import { PrivateRoute } from "components/PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Home } from "./Home";
import { LoginModal } from "./LogInModal";
import { RegistrationModal } from 'Pages/Register';
import { Contacts } from './Contacts';
import { ContactsAppBar } from "./AppBar";


// const Contacts = lazy(() => import('components/Contacts'));
// const Home = lazy(() => import('components/Home'));
// const RegisterPage = lazy(() => import('Pages/Register'));
// const LoginPage = lazy(() => import('Pages/Login'));

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
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
