import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors.auth';

export default function PrivateRout() {
  const IsAuth = useSelector(selectIsAuth);
  return IsAuth ? <Outlet /> : <Navigate to="/home" />;
}
