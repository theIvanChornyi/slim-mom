import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors.auth';

export default function PublicRoute() {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();
  return isAuth ? <Navigate to={location.state?.from || '/'} /> : <Outlet />;
}
