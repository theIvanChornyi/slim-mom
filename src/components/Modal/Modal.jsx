import { createPortal } from 'react-dom';
import { useEffect } from 'react';

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
  FilterWrap,
  FilterInput
} from './Modal.styled';
import UserMenu from 'components/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/calorie/calorie.selectors';
 import { changeFilter } from 'redux/calorie/calorie.slice';


const modalRoot = document.getElementById('modal-root');

export default function Modal({ isOpen, setIsOpen, dailyRateCalc }) {
  const { dailyRate, notAllowedProducts } = dailyRateCalc;

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


 const value = useSelector(getFilter);
    const dispatch = useDispatch();
    const onChangeFilter = event => {
        dispatch(changeFilter(event.target.value));
    };

  const getFilteredProducts = () => (
    notAllowedProducts.filter(item =>
    item.toLowerCase().includes(value.toLowerCase()))
  )
  
  const notAllowed = getFilteredProducts(notAllowedProducts);

  if (!getFilteredProducts(notAllowedProducts)) {
    return console.log ("it's okey, bon appetit!")
  }

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) setIsOpen(false);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') setIsOpen(false);
  };


  return createPortal(
    <>
      <UserMenu {...{ isOpen, handleCloseClick }} />
      <Overlay onClick={handleBackdropClick}>
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
          <FilterWrap>
            <FilterInput
                onChange={onChangeFilter}
                type="text"
                value={value}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces."
                required
                placeholder="Search product"
            />
         </FilterWrap>
          <FoodText>
            {notAllowed.map(product => (
              <li key={product}>{product}</li>
            ))}
            
          </FoodText>
          {notAllowed.length === 0 && (
            <FoodText>
              This product is not listed. Enjoy your meal!
            </FoodText>
          )}
          <RegisterBtn to="/registration">Start losing weight</RegisterBtn>
        </ModalWindow>
      </Overlay>
    </>,
    modalRoot
  );
}
