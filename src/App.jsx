import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from 'components/Loader';
import PrivateRout from 'components/PrivateRout';
import { Background } from 'components/Background';

// import { Test } from 'pages/Test/Test';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/thunk.auth';
import Header from 'components/Header';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsAuth } from 'redux/auth/selectors.auth';

const Home = lazy(() => import('pages/Home'));
const Diary = lazy(() => import('pages/Diary'));
const Login = lazy(() => import('pages/Login'));
const Calculator = lazy(() => import('pages/Calculator'));
const Registration = lazy(() => import('pages/Registration'));

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      <Background isAuth={isAuth}>
        <Header />

        <Suspense fallback={<Loader />}>
          <Routes>
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<PrivateRout />}>
              <Route path="/diary" element={<Diary />} />
              <Route path="/calculator" element={<Calculator />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        <ToastContainer autoClose={5000} limit={1} />
      </Background>
    </>
  );
};
