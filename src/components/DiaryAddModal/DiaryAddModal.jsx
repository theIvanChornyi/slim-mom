import { Container } from 'components/Container';
import { useForm } from 'react-hook-form';
import {
  AddModal,
  ProductAddBtn,
  ProductForm,
  ProductNameInp,
  ProductWeightInp,
} from './DiaryAddModal.styled';
export default function DiaryAddModal({ handleClose }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    handleClose();
    console.log(data);
  };
  return (
    <AddModal>
      <Container>
        <ProductForm onSubmit={handleSubmit(onSubmit)}>
          <ProductNameInp
            type="text"
            {...register('productId')}
            placeholder="Enter product name"
          />
          <ProductWeightInp
            type="number"
            {...register('weight')}
            placeholder="Grams"
          />
          <ProductAddBtn type="submit">Add</ProductAddBtn>
        </ProductForm>
      </Container>
    </AddModal>
  );
}
