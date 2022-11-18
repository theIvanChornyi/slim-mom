import { Container } from 'components/Container';
import DatePicker from 'components/DatePicker';
import DiaryAddModalBtn from 'components/DiaryAddModal/DiaryAddModalBtn';
import DiaryAddModal from 'components/DiaryAddModal';

import DiaryProductsList from 'components/DiaryProductsList';
import SideBar from 'components/SideBar';

import debounce from 'lodash.debounce';
import { useForm } from 'react-hook-form';
import DairyProductForm from 'components/DiaryProductForm';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectDailyRate,
  selectNotAllowedProducts,
} from 'redux/calorie/calorie.selectors';
import { privateApi } from 'services/API/http';
import {
  DairyAddModalWrap,
  DairyAddProduct,
  DiaryBox,
  Gradient,
  ProductContainer,
} from './Diary.styled';

export default function Diary() {
  /*<-----------------------------> */
  // For Form
  const { register, handleSubmit, reset, watch } = useForm();
  // Modal in mobile version
  const [addModalOpen, setAddModalOpen] = useState(false);
  // State for Date from Calendar
  const [date, setDate] = useState(new Date());
  const [newProduct, setNewProduct] = useState(null);

  /*<-----------------------------> */
  // ! 1. для он чейнч в інпуті пошуку продукту додавати дебаунс, якщо так, на ск чекунд? - вже додала.

  // ! 2. нижче логіка для пошуку продукту по імені (там де випадає дроп даун). Потім по кнопці потрібно зробити логіку для додавання продукту

  // ! 3. локальний стейт підправити

  const daily = useSelector(selectDailyRate);
  const notAllowed = useSelector(selectNotAllowedProducts);

  const [left, setLeft] = useState('0');
  const [consumed, setConsumed] = useState('0');
  const [dailyRate, setDailyRate] = useState(daily);
  const [percent, setpPercent] = useState('0');
  const [notAllowedProducts, setNotAllowedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [productId, setProductId] = useState(null);
  const [value, setValue] = useState('');

  const getSearchedProducts = useMemo(
    () =>
      debounce(search => {
        if (search.length < 1) {
          return;
        }

        setIsLoading(true);
        privateApi
          .get('/product', { params: { search } })
          .then(({ data }) => setProducts(data))
          .finally(() => {
            setIsLoading(false);
          });
      }, 500),
    []
  );

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);
    getSearchedProducts(value.trim());

    if (value.trim().length < 1) {
      setProducts(null);
    }
  };

  const handleSelectProduct = product => {
    setValue(product.title.ua);
    setProducts(null);
    setProductId(product._id);
  };

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
            <ProductContainer>
              <DatePicker date={date} setDate={setDate} />

              <DairyAddProduct>
                <DairyProductForm
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
              </DairyAddProduct>

              <DiaryProductsList />
              <DairyAddModalWrap>
                <DiaryAddModalBtn
                  type={'button'}
                  onClick={handleAddProductOpen}
                />
              </DairyAddModalWrap>

              <Gradient />
            </ProductContainer>
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
