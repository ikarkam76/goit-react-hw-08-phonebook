import { Route, Routes } from "react-router-dom";
import { Contacts } from "./Contacts";
import { Home } from "./Home";
import { Login } from "./Login";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="contacts" element={<Contacts /> } />
        <Route path="login" element={<Login /> } />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
