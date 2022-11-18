import { Container } from 'components/Container';

import DiaryProductsList from 'components/DiaryProductsList';
import SideBar from 'components/SideBar';
import debounce from 'lodash.debounce';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectDailyRate,
  selectNotAllowedProducts,
} from 'redux/calorie/calorie.selectors';
import { privateApi } from 'services/API/http';
import { DiaryBox, Gradient } from './Diary.styled';

export default function Diary() {
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
          notAllowedProducts={notAllowed}
        />
      </DiaryBox>
    </Container>
  );
}
