import { Container } from 'components/Container';
import DairyProductForm from 'components/DiaryProductForm';
import PropTypes from 'prop-types';

import { AddModal, ModalArrowBtn, ModalLine } from './DiaryAddModal.styled';
export default function DiaryAddModal({
  handleClose,
  register,
  handleSubmit,
  reset,
  normalizedDate,
  setEatenProducts,
  watch,
  handleDeleteProduct,
}) {
  return (
    <AddModal>
      <Container>
        <ModalLine>
          <ModalArrowBtn onClick={handleClose}>
            <svg
              width="16"
              height="10"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </ModalArrowBtn>
        </ModalLine>

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

DiaryAddModal.propTypes = { handleClose: PropTypes.func };
