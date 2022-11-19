import DatePicker from 'components/DatePicker';
import DiaryAddModalBtn from 'components/DiaryAddModal/DiaryAddModalBtn';
import DiaryAddModal from 'components/DiaryAddModal';

import DiaryProductsList from 'components/DiaryProductsList';

import { useForm } from 'react-hook-form';
import DairyProductForm from 'components/DiaryProductForm';
import { useState } from 'react';

import {
  DairyAddModalWrap,
  DairyAddProduct,
  DiaryBox,
  ProductContainer,
} from './Diary.styled';
import { useOutletContext, useSearchParams } from 'react-router-dom';

export default function Diary() {
  const { register, handleSubmit, reset, watch } = useForm();
  const [searchParams] = useSearchParams();
  const choosenDate = searchParams.get('date') || new Date();

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [date, setDate] = useState(new Date(choosenDate));
  const [newProduct, setNewProduct] = useState(null);
  const [userData, setNotAllowedProducts, dailyRate] = useOutletContext();

  const normalizedDate = date.toLocaleDateString('en-CA').replaceAll('/', '-');

  const handleAddProductOpen = () => {
    setAddModalOpen(true);
  };
  const handleAddProductClose = () => {
    setAddModalOpen(false);
  };

  return (
    <>
      {!addModalOpen && (
        <DiaryBox>
          <ProductContainer>
            <DatePicker date={date} setDate={setDate} />

            <DairyAddProduct>
              <DairyProductForm
                {...{
                  register,
                  handleSubmit,
                  reset,
                  normalizedDate,
                  newProduct,
                  setNewProduct,
                  watch,
                }}
              />
            </DairyAddProduct>

            <DiaryProductsList products={dailyRate?.eatenProducts} />
            <DairyAddModalWrap>
              <DiaryAddModalBtn
                type={'button'}
                onClick={handleAddProductOpen}
              />
            </DairyAddModalWrap>
          </ProductContainer>
        </DiaryBox>
      )}
      {addModalOpen && (
        <DiaryAddModal
          handleClose={handleAddProductClose}
          {...{
            register,
            handleSubmit,
            reset,
            date,
            newProduct,
            setNewProduct,
            watch,
          }}
        />
      )}
    </>
  );
}
