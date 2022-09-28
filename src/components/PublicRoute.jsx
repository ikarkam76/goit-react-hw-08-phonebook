import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'Redux/Auth1/authSelectors';

export const PublicRoute = ({ children }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ?  <Navigate replace to="/" /> : children ;
};
