import DiaryAddModalBtn from 'components/DiaryAddModal/DiaryAddModalBtn';
import debounce from 'lodash.debounce';
import { Fragment, useState } from 'react';
import APIs from 'services/API/API';
import {
  MobileBtn,
  ProductAddBtn,
  ProductForm,
  ProductNameInp,
  ProductWeightInp,
  TabletBtn,
} from './DiaryProductForm.styled';

export default function DiaryProductForm({
  handleClose,
  register,
  handleSubmit,
  reset,
  normalizedDate,
  setEatenProducts,
}) {
  const [querry, setQuerry] = useState('');
  const [products, setProducts] = useState([]);

  const onSubmit = async ({ title, weight, productId }) => {
    const isDisabled = products.find(product => product.title.ru === title);
    if (isDisabled) {
      handleClose && handleClose();
      reset();
      const newProduct = { weight, productId, date: normalizedDate };
      const { data } = await APIs.addEatenProductRequest(newProduct);
      setEatenProducts(prev => [...prev, data?.eatenProduct]);
    } else {
      window.alert('Обманщик');
    }
  };

  const handleChange = async e => {
    const search = e.target.value.trim();
    setQuerry(search);
    if (search) {
      try {
        const { data } = await APIs.searchingProductRequest(search);
        setProducts(data);
      } catch (error) {}
    }
  };

  const isDisabledWeight = querry;
  return (
    <ProductForm onSubmit={handleSubmit(onSubmit)}>
      <ProductNameInp
        type="text"
        {...register('title')}
        onInput={debounce(handleChange, 300)}
        placeholder="Enter product name"
        list="products"
      />

      <datalist id="products">
        {products.map(product => (
          <Fragment key={product._id}>
            <option value={product.title.ru} product-id={product._id}>
              Caloricity: {product.calories} kKal / 100g
            </option>
            <input
              list="products"
              {...register('productId')}
              type="hidden"
              value={product._id}
            />
          </Fragment>
        ))}
      </datalist>

      <ProductWeightInp
        disabled={!isDisabledWeight}
        type="number"
        min="1"
        {...register('weight')}
        placeholder="Grams"
      />
      <MobileBtn>
        <ProductAddBtn type="submit">Add</ProductAddBtn>
      </MobileBtn>
      <TabletBtn>
        <DiaryAddModalBtn />
      </TabletBtn>
    </ProductForm>
  );
}
