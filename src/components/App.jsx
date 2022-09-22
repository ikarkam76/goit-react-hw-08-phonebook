import { RegisterPage } from "Pages/Register";
import { Route, Routes } from "react-router-dom";
import { Contacts } from "./Contacts";
import { Home } from "./Home";
import { LoginPage } from "../Pages/Login";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<RegisterPage />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
