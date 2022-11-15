import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'components/Loader';
import PrivateRout from 'components/PrivateRout';

const Home = lazy(() => import('pages/Home'));
const Diary = lazy(() => import('pages/Diary'));
const Login = lazy(() => import('pages/Login'));
const Registration = lazy(() => import('pages/Registration'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/home" element={<Home />} />
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
