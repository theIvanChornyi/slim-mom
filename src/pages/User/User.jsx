import { Container } from 'components/Container';
import { Outlet, useSearchParams } from 'react-router-dom';
import SideBar from 'components/SideBar';
import { UserPage, UserWrapper } from './User.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIs from 'services/API/API';
import { toast } from 'react-toastify';

const TODAY = new Date().toLocaleDateString('en-CA');

export default function User() {
  const [searchParams] = useSearchParams();
  const date = searchParams.get('date') || TODAY;
  const normalizedDate = new Date(date)
    .toLocaleDateString('en-GB')
    .replaceAll('/', '.');

  const { userId } = useParams();
  const usersParams = JSON.parse(window.localStorage.getItem('userParams'));

  const [dailyRate, setDailyRate] = useState({});
  const [notAllowedProducts, setNotAllowedProducts] = useState([]);
  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  userData && toast.warn(errorMessage);

  useEffect(() => {
    getInfoSideBar(
      setDailyRate,
      setErrorMessage,
      setNotAllowedProducts,
      date,
      userId,
      usersParams
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, userId]);

  useEffect(() => {
    getAllowedProducts(setUserData, setNotAllowedProducts, setErrorMessage);
  }, []);

  return (
    <UserPage>
      <Container>
        <UserWrapper>
          <Outlet context={{ userData, setNotAllowedProducts, dailyRate }} />

          <SideBar
            date={normalizedDate}
            dailyInfo={dailyRate}
            notAllowedProducts={notAllowedProducts}
          />
        </UserWrapper>
      </Container>
    </UserPage>
  );
}

async function getAllowedProducts(
  setUserData,
  setNotAllowedProducts,
  setErrorMessage
) {
  try {
    const { data } = await APIs.getUserInfoRequest();
    setErrorMessage(null);
    setUserData(data.userData);
    setNotAllowedProducts(data.userData.notAllowedProducts);
  } catch (error) {}
}

async function getInfoSideBar(
  setDailyRate,
  setErrorMessage,
  setNotAllowedProducts,
  date,
  userId,
  usersParams
) {
  try {
    const { data } = await APIs.getInfoForDayRequest({ date });
    setDailyRate(data);
    setErrorMessage(null);
  } catch (error) {
    if (
      error.response.data.message === 'Please, count your daily rate first' &&
      usersParams
    ) {
      setErrorMessage(null);
      getRequestWithSaved(
        userId,
        usersParams,
        setDailyRate,
        setNotAllowedProducts,
        setErrorMessage
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
  setErrorMessage
) {
  try {
    const { data } = await APIs.calculateDaylyAuthRequest(userId, usersParams);
    setDailyRate({ dailyRate: data.dailyRate, kcalLeft: data.dailyRate });
    setNotAllowedProducts(data.notAllowedProducts);
    setErrorMessage(null);
    window.localStorage.removeItem('userParams');
  } catch (error) {}
}
