import { Container } from 'components/Container';
import { Outlet, useSearchParams } from 'react-router-dom';
import SideBar from 'components/SideBar';
import { UserPage, UserWrapper } from './User.styled';
import { useEffect, useState } from 'react';
import APIs from 'services/API/API';

const TODAY = new Date().toLocaleDateString('en-CA');

export default function User() {
  const [searchParams] = useSearchParams();
  const [dailyRate, setDailyRate] = useState(null);
  const [notAllowedProducts, setNotAllowedProducts] = useState(null);
  const [userData, setUserData] = useState(null);

  const date = searchParams.get('date') || TODAY;
  const normalizedDate = new Date(date)
    .toLocaleDateString('en-GB')
    .replaceAll('/', '.');
  useEffect(() => {
    async function getAllowedProducts() {
      try {
        const { data } = await APIs.getUserInfoRequest();
        setUserData(data.userData);
        setNotAllowedProducts(data.userData.notAllowedProducts);
      } catch (error) {}
    }
    getAllowedProducts();
  }, []);

  useEffect(() => {
    async function getInfoSideBar() {
      try {
        const { data } = await APIs.getInfoForDayRequest({ date });
        setDailyRate(data);
      } catch (error) {}
    }
    getInfoSideBar();
  }, [date]);

  return (
    <UserPage>
      <Container>
        <UserWrapper>
          <Outlet context={{ userData, setNotAllowedProducts, dailyRate }} />
          {dailyRate && (
            <SideBar
              date={normalizedDate}
              dailyInfo={dailyRate}
              notAllowedProducts={notAllowedProducts}
            />
          )}
        </UserWrapper>
      </Container>
    </UserPage>
  );
}
