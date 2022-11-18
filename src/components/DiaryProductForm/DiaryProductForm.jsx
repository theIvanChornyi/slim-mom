import DiaryAddModalBtn from 'components/DiaryAddModal/DiaryAddModalBtn';
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
  date,
  setNewProduct,
  watch,
}) {
  const onSubmit = data => {
    handleClose && handleClose();
    reset();
    console.log({ ...data, date });
    setNewProduct({ ...data, date });
  };

  const isDisabledWeight = watch('productId');
  return (
    <ProductForm onSubmit={handleSubmit(onSubmit)}>
      <ProductNameInp
        type="text"
        {...register('productId')}
        placeholder="Enter product name"
      />
      <ProductWeightInp
        disabled={!isDisabledWeight}
        type="number"
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
