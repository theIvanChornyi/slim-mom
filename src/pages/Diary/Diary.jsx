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
  Gradient,
  ProductContainer,
} from './Diary.styled';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import APIs from 'services/API/API';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from 'services/validation/productSchema';
import { toast } from 'react-toastify';

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

  useEffect(() => {
    toast.dismiss();
    toast.info(errors.weight?.message);
  }, [errors.weight?.message]);

  const [searchParams] = useSearchParams();
  const choosenDate = searchParams.get('date') || new Date();
  const { dailyRate, setDailyRate } = useOutletContext();

  const userEatenProducts = dailyRate?.eatenProducts;

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [date, setDate] = useState(new Date(choosenDate));
  const [eatenProducts, setEatenProducts] = useState([]);
  const [isDeliting, setIsDeliting] = useState(null);

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
    setIsDeliting(deleteId);
    try {
      const { data } = await APIs.deleteEatenProductRequest(dayId, deleteId);
      setDailyRate(prev => ({
        ...prev,
        daySummary: data?.newDaySummary,
        kcalLeft: data?.newDaySummary?.kcalLeft,
      }));
      setEatenProducts(prev => prev.filter(product => product.id !== deleteId));
      setIsDeliting(null);
    } catch (error) {}
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
              isDeliting={isDeliting}
            />

            {eatenProducts?.length > 0 && <Gradient />}

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
