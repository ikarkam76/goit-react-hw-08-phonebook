import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "Redux/auth/authOperation";

export const Home = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  }
    return (
      <>
        <div>React homework template</div>
        <p></p>
        <Link to="/login">Log in</Link>
        <p></p>
        <Link to="/registration">Registration</Link>
        <p></p>
        <Link to="/contacts">Contacts</Link>
        <p></p>
        <button type="button" onClick={handleClick}>
          Log out
        </button>
        <p></p>
          <Outlet />
      </>
    );
}