import { Link, Outlet } from "react-router-dom";
import { Suspense } from 'react';

export const Home = () => {
    return (
      <>
        <div>React homework template</div>
        <p></p>
        <Link to="/registration">Registration</Link>
        <p></p>
        <Link to="/contacts">Contacts</Link>
        <p></p>
        <Link to="/login">Login</Link>
        <p></p>
        <Suspense>
          <Outlet />
        </Suspense>
      </>
    );
}