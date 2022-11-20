import DiaryAddModalBtn from 'components/DiaryAddModal/DiaryAddModalBtn';
import debounce from 'lodash.debounce';
import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
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
  const [errorState, setErrorState] = useState(null);
  const [state, setState] = useState('idle');

  toast.warn(errorState);

  const handleChange = async e => {
    const search = e.target.value;
    setQuerry(search);
    setErrorState(null);
    if (search) {
      try {
        const { data } = await APIs.searchingProductRequest(search);
        setProducts(data);
        toast.dismiss();
      } catch (error) {
        const message = error?.response?.data?.message;
        setErrorState(message);
      }
    }
  };

  const onSubmit = async ({ title, weight }) => {
    const isDisabled = products.find(product => product.title.ru === title);
    setState('pending');
    setErrorState(null);
    if (isDisabled) {
      handleClose && handleClose();
      reset();
      const newProduct = {
        weight,
        productId: isDisabled._id,
        date: normalizedDate,
      };
      try {
        const { data } = await APIs.addEatenProductRequest(newProduct);
        await setState('idle');
        setEatenProducts(prev => [...prev, data?.eatenProduct]);
        setProducts([]);
        setQuerry('');
      } catch (error) {
        const message = error?.response?.data?.message;
        setState('idle');
        setErrorState(message);
      }
    } else {
      toast.warn('Please use dropdowl list only!');
    }
  };

  const isDisabledWeight = querry;
  return (
    <ProductForm onSubmit={handleSubmit(onSubmit)}>
      <ProductNameInp
        errorState={errorState}
        type="text"
        {...register('title')}
        onInput={debounce(handleChange, 100)}
        placeholder="Enter product name"
        list="products"
      />

      <datalist id="products">
        {products.map(product => (
          <Fragment key={product._id}>
            <option value={product.title.ru} product-id={product._id}>
              Caloricity: {product.calories} kKal / 100g
            </option>
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
        <DiaryAddModalBtn errorState={errorState} state={state} />
      </TabletBtn>
    </ProductForm>
  );
}
