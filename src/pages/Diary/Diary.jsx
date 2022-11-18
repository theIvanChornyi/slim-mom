import { Container } from 'components/Container';
import DatePicker from 'components/DatePicker';
import DiaryAddModalBtn from 'components/DiaryAddModal/DiaryAddModalBtn';
import DiaryAddModal from 'components/DiaryAddModal';

import DiaryProductsList from 'components/DiaryProductsList';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import {
  DairyAddModalWrap,
  DairyAddProduct,
  DiaryBox,
  Gradient,
} from './Diary.styled';
import { useForm } from 'react-hook-form';
import DairyProductForm from 'components/DiaryProductForm';

export default function Diary() {
  /*<-----------------------------> */
  // For Form
  const { register, handleSubmit, reset } = useForm();
  // Modal in mobile version
  const [addModalOpen, setAddModalOpen] = useState(false);
  // State for Date from Calendar
  const [date, setDate] = useState(new Date());

  /*<-----------------------------> */

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
            <DatePicker date={date} setDate={setDate} />

            <DairyAddProduct>
              <DairyProductForm {...{ register, handleSubmit, reset }} />
            </DairyAddProduct>

            <DiaryProductsList />
            <DairyAddModalWrap>
              <DiaryAddModalBtn
                type={'button'}
                onClick={handleAddProductOpen}
              />
            </DairyAddModalWrap>

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
      {addModalOpen && (
        <DiaryAddModal
          handleClose={handleAddProductClose}
          {...{ register, handleSubmit, reset }}
        />
      )}
    </>
  );
}
