import { Container } from 'components/Container';

import DiaryProductsList from 'components/DiaryProductsList';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import { DiaryBox, Gradient } from './Diary.styled';

export default function Diary() {
  const [left, setLeft] = useState('0');
  const [consumed, setConsumed] = useState('0');
  const [dailyRate, setDailyRate] = useState('0');
  const [percent, setpPercent] = useState('0');
  const [notAllowedProducts, setNotAllowedProducts] = useState([]);

  return (
    <Container>
      <DiaryBox>
        <DiaryProductsList />
        <Gradient />
        <SideBar
          left={left}
          consumed={consumed}
          dailyRate={dailyRate}
          percent={percent}
          notAllowedProducts={notAllowedProducts}
        />
      </DiaryBox>
    </Container>
  );
}
