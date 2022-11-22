import { createPortal } from 'react-dom';
import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Overlay,
  ModalWindow,
  ModalTitle,
  Callories,
  CalloriesText,
  FoodTitle,
  FoodText,
  ModulCloseBtn,
  ModulLine,
  RegisterBtn,
  CloseLine,
} from './Modal.styled';
import { Container } from 'components/Container';
import GoBackBtn from 'components/UserMenu/GoBackBtn';
import Filter from 'components/Filter';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ setIsOpen, dailyRateCalc }) {
  const { dailyRate, notAllowedProducts } = dailyRateCalc;
  const [filter, setFilter] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) setIsOpen(false);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') setIsOpen(false);
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const filteredProducts = useMemo(
    () =>
      notAllowedProducts
        .filter(product => product.toLowerCase().includes(filter.toLowerCase()))
        .sort((prev, post) => prev.localeCompare(post)),
    [filter, notAllowedProducts]
  );

  return createPortal(
    <>
      <Overlay onClick={handleBackdropClick}>
        <CloseLine>
          <Container>
            <GoBackBtn handleCloseClick={handleCloseClick}>close</GoBackBtn>
          </Container>
        </CloseLine>
        <ModalWindow>
          <ModulCloseBtn type="button" onClick={handleCloseClick}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8333 1.3415L10.6583 0.166504L5.99998 4.82484L1.34164 0.166504L0.166641 1.3415L4.82498 5.99984L0.166641 10.6582L1.34164 11.8332L5.99998 7.17484L10.6583 11.8332L11.8333 10.6582L7.17498 5.99984L11.8333 1.3415Z"
                fill="black"
              />
            </svg>
          </ModulCloseBtn>
          <ModalTitle>Your recommended daily calorie intake is</ModalTitle>
          <Callories>
            {dailyRate}
            <CalloriesText>ккал</CalloriesText>
          </Callories>
          <ModulLine />
          <FoodTitle>Foods you should not eat</FoodTitle>
          <Filter onChangeFilter={handleFilter} value={filter} />
          <FoodText>
            {filteredProducts.map(product => (
              <li key={product}>{product}</li>
            ))}
          </FoodText>
          {filteredProducts.length === 0 && (
            <FoodText>This product is not listed. Enjoy your meal!</FoodText>
          )}
          <RegisterBtn to="/registration">Start losing weight</RegisterBtn>
        </ModalWindow>
      </Overlay>
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  setIsOpen: PropTypes.func,
  dailyRateCalc: PropTypes.shape({
    dailyRate: PropTypes.number.isRequired,
    notAllowedProducts: PropTypes.array.isRequired,
  }),
};
