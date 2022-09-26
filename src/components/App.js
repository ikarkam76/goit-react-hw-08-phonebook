import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from "Redux/auth/authOperation";
import { PrivateRoute } from "components/PrivateRoute";
import { Home } from "./Home";
import { RegisterPage } from "Pages/Register";
import { LoginPage } from "Pages/Login";
import { Contacts } from './Contacts';


// const Contacts = lazy(() => import('components/Contacts'));
// const Home = lazy(() => import('components/Home'));
// const RegisterPage = lazy(() => import('Pages/Register'));
// const LoginPage = lazy(() => import('Pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(fetchCurrentUser())}, [dispatch]);
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route path="registration" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<PrivateRoute><Contacts/></PrivateRoute>} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
