import { Container } from 'components/Container';
import DatePicker from 'components/DatePicker';
import DiaryAddBtn from 'components/DiaryAddBtn';
import DiaryAddModal from 'components/DiaryAddModal';

import DiaryProductsList from 'components/DiaryProductsList';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import { DiaryBox, Gradient } from './Diary.styled';

export default function Diary() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [left, setLeft] = useState('0');
  const [consumed, setConsumed] = useState('0');
  const [dailyRate, setDailyRate] = useState('0');
  const [percent, setpPercent] = useState('0');
  const [notAllowedProducts, setNotAllowedProducts] = useState([]);

  const handleAddProductOpen = () => {
    setAddModalOpen(true);
  };
  const handleAddProductClose = () => {
    setAddModalOpen(false);
  };

  return (
    <>
      {!addModalOpen && (
        <Container>
          <DiaryBox>
            <DatePicker />
            <DiaryProductsList />
            <DiaryAddBtn onClick={handleAddProductOpen} />
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
      )}
      {addModalOpen && <DiaryAddModal handleClose={handleAddProductClose} />}
    </>
  );
}
