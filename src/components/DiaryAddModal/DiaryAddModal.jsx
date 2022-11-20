import { Container } from 'components/Container';
import DairyProductForm from 'components/DiaryProductForm';
import { AddModal } from './DiaryAddModal.styled';
export default function DiaryAddModal({
  handleClose,
  register,
  handleSubmit,
  reset,
  normalizedDate,
  setEatenProducts,
  watch,
  products,
  handleDeleteProduct,
}) {
  return (
    <AddModal>
      <Container>
        <DairyProductForm
          {...{
            handleClose,
            register,
            handleSubmit,
            reset,
            normalizedDate,
            watch,
            setEatenProducts,
            handleDeleteProduct,
          }}
        />
      </Container>
    </AddModal>
  );
}
