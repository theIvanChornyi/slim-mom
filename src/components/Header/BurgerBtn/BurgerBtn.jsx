import { MobileMenuBtn } from './BurgerBtn.styled';
import PropTypes from 'prop-types';

export default function BurgerBtn({ onClick, isOpen }) {
  return (
    <MobileMenuBtn type="button" onClick={onClick}>
      {!isOpen ? (
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
            fill="#212121"
          />
        </svg>
      ) : (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L13 13" stroke="#212121" strokeWidth="2" />
          <path d="M1 13L13 0.999999" stroke="#212121" strokeWidth="2" />
        </svg>
      )}
    </MobileMenuBtn>
  );
}
BurgerBtn.propTypes = { onClick: PropTypes.func, isOpen: PropTypes.bool };
