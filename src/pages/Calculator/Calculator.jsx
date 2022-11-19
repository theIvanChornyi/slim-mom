import CalcForm from 'components/CalcForm';
import SideBar from 'components/SideBar';
import { useEffect, useState } from 'react';
import { Thumb } from './Calculator.styled';
import APIs from 'services/API/API';
import { selectUserId } from 'redux/auth/selectors.auth';
import { useSelector } from 'react-redux';

export default function CalculatorPage() {
  const id = useSelector(selectUserId);
  const [dailyRate, setDailyRate] = useState(null);

  useEffect(() => {
    const usersParams = JSON.parse(window.localStorage.getItem('userParams'));

    async function getDailyRate() {
      try {
        const { data } = await APIs.calculateDaylyAuthRequest(id, usersParams);
        return data;
      } catch (error) {}
    }
    setDailyRate(getDailyRate());
  }, [id]);

  return (
    <>
      <Thumb>
        <CalcForm />
      </Thumb>
    </>
  );
}
