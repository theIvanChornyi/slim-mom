import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors.auth';

export default function PrivateRout() {
  const token = useSelector(selectIsAuth);
  return token ? <Outlet /> : <Navigate to="/Home" />;
}
