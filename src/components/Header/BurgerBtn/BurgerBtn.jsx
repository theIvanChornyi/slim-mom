import { MobileMenuBtn } from './BurgerBtn.styled';

export default function BurgerBtn({ onClick }) {
  return (
    <MobileMenuBtn type="button" onClick={onClick}>
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
    </MobileMenuBtn>
  );
}
