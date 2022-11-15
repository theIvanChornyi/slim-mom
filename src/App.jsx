import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'components/Loader';
import PrivateRout from 'components/PrivateRout';
import { Test } from 'pages/Test/Test';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/thunk.auth';

const Home = lazy(() => import('pages/Home'));
const Diary = lazy(() => import('pages/Diary'));
const Login = lazy(() => import('pages/Login'));
const Calculator = lazy(() => import('pages/Calculator'));

const Registration = lazy(() => import('pages/Registration'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<PrivateRout />}>
            <Route path="/diary" element={<Diary />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
