import { Container } from 'components/Container';
import { Outlet, useSearchParams } from 'react-router-dom';
import SideBar from 'components/SideBar';
import { UserPage, UserWrapper } from './User.styled';
import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIs from 'services/API/API';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { selectSlimDaddy } from 'redux/slimDaddy/selectors.slimDaddy';

const TODAY = new Date().toLocaleDateString('en-CA');

export default function User() {
  const [searchParams] = useSearchParams();
  const date = searchParams.get('date') || TODAY;
  const normalizedDate = new Date(date)
    .toLocaleDateString('en-GB')
    .replaceAll('/', '.');

  const { userId } = useParams();
  const isDaddy = useSelector(selectSlimDaddy);

  const usersParams = JSON.parse(window.localStorage.getItem('userParams'));

  const [dailyRate, setDailyRate] = useState({});
  const [state, setState] = useState('idle');

  const [notAllowedProducts, setNotAllowedProducts] = useState([]);
  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  userData && toast.warn(errorMessage);

  useEffect(() => {
    getInfoSideBar(
      setDailyRate,
      setErrorMessage,
      setNotAllowedProducts,
      setUserData,
      date,
      userId,
      usersParams,
      setState
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, userId]);

  useEffect(() => {
    getAllowedProducts(
      setUserData,
      setNotAllowedProducts,
      setErrorMessage,
      setState
    );
  }, []);
  return (
    <UserPage isDaddy={isDaddy}>
      <Container>
        {userData?.notAllowedProducts ? (
          <UserWrapper>
            <Suspense fallback={<Loader />}>
              <Outlet
                context={{
                  userData,
                  setNotAllowedProducts,
                  dailyRate,
                  setDailyRate,
                  state,
                }}
              />
            </Suspense>

            <SideBar
              date={normalizedDate}
              dailyInfo={dailyRate}
              notAllowedProducts={notAllowedProducts}
            />
          </UserWrapper>
        ) : (
          <Loader />
        )}
      </Container>
    </UserPage>
  );
}

async function getAllowedProducts(
  setUserData,
  setNotAllowedProducts,
  setErrorMessage,
  setState
) {
  try {
    setState('pending');
    window.localStorage.removeItem('userParams');
    const { data } = await APIs.getUserInfoRequest();
    setErrorMessage(null);
    setUserData(data.userData);
    setNotAllowedProducts(data.userData.notAllowedProducts);
    setState('idle');
  } catch (error) {
    const message = error?.response?.data?.message;
    setErrorMessage(message);
    setState('idle');
  }
}

async function getInfoSideBar(
  setDailyRate,
  setErrorMessage,
  setNotAllowedProducts,
  setUserData,
  date,
  userId,
  usersParams,
  setState
) {
  try {
    setState('pending');
    const { data } = await APIs.getInfoForDayRequest({ date });
    setDailyRate(data);
    setErrorMessage(null);
    setState('idle');
  } catch (error) {
    setState('idle');
    if (
      error.response.data.message === 'Please, count your daily rate first' &&
      usersParams
    ) {
      setErrorMessage(null);
      setUserData(usersParams);
      getRequestWithSaved(
        userId,
        usersParams,
        setDailyRate,
        setNotAllowedProducts,
        setErrorMessage,
        setState
      );
    } else {
      setErrorMessage(error.response.data.message);
    }
  }
}

async function getRequestWithSaved(
  userId,
  usersParams,
  setDailyRate,
  setNotAllowedProducts,
  setErrorMessage,
  setState
) {
  try {
    setState('pending');

    const { data } = await APIs.calculateDaylyAuthRequest(userId, usersParams);
    setDailyRate({ dailyRate: data.dailyRate, kcalLeft: data.dailyRate });
    setNotAllowedProducts(data.notAllowedProducts);
    setErrorMessage(null);
    window.localStorage.removeItem('userParams');
    setState('idle');
  } catch (error) {
    const message = error?.response?.data?.message;
    setErrorMessage(message);
    setState('idle');
  }
}
