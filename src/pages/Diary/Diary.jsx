import DatePicker from 'components/DatePicker';
import DiaryAddModalBtn from 'components/DiaryAddModal/DiaryAddModalBtn';
import DiaryAddModal from 'components/DiaryAddModal';

import DiaryProductsList from 'components/DiaryProductsList';

import { useForm } from 'react-hook-form';
import DairyProductForm from 'components/DiaryProductForm';
import { useEffect, useState } from 'react';

import {
  DairyAddModalWrap,
  DairyAddProduct,
  DiaryBox,
  ProductContainer,
} from './Diary.styled';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import APIs from 'services/API/API';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from 'services/validation/productSchema';

export default function Diary() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const [searchParams] = useSearchParams();
  const choosenDate = searchParams.get('date') || new Date();
  const { dailyRate } = useOutletContext();
  const userEatenProducts = dailyRate?.eatenProducts;

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [date, setDate] = useState(new Date(choosenDate));
  const [eatenProducts, setEatenProducts] = useState([]);

  const normalizedDate = date.toLocaleDateString('en-CA').replaceAll('/', '-');

  useEffect(() => {
    setEatenProducts(userEatenProducts);
  }, [userEatenProducts]);

  const handleAddProductOpen = () => {
    setAddModalOpen(true);
  };
  const handleAddProductClose = () => {
    setAddModalOpen(false);
  };

  const handleDeleteProduct = async deleteId => {
    const dayId = dailyRate.id;
    try {
      const { data } = await APIs.deleteEatenProductRequest(dayId, deleteId);
    } catch (error) {}

    setEatenProducts(prev => prev.filter(product => product.id !== deleteId));
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
                  watch,
                  setEatenProducts,
                }}
              />
            </DairyAddProduct>

            <DiaryProductsList
              products={eatenProducts}
              handleDeleteProduct={handleDeleteProduct}
            />
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
          handleDeleteProduct={handleDeleteProduct}
          {...{
            register,
            handleSubmit,
            reset,
            normalizedDate,
            watch,
            setEatenProducts,
          }}
        />
      )}
    </>
  );
}
