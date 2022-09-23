import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { RegisterPage } from "Pages/Register";
import { Route, Routes } from "react-router-dom";
import { Contacts } from "./Contacts";
import { Home } from "./Home";
import { LoginPage } from "../Pages/Login";
import { fetchCurrentUser } from "Redux/auth/authOperation";




export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(fetchCurrentUser())}, [dispatch]);
  return (
    <Routes>
        <Route path="/" element={<Home />}>
          <Route path="registration" element={<RegisterPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<Home />} />
    </Routes>
  );
};
