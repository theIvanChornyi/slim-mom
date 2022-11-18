import { Container } from 'components/Container';
import DairyProductForm from 'components/DiaryProductForm';
import { AddModal } from './DiaryAddModal.styled';
export default function DiaryAddModal({
  handleClose,
  register,
  handleSubmit,
  reset,
  date,
  newProduct,
  setNewProduct,
  watch,
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
            date,
            newProduct,
            setNewProduct,
            watch,
          }}
        />
      </Container>
    </AddModal>
  );
}
