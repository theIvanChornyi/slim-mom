import {
  BurgerItem,
  BurgerLink,
  BurgerList,
  BurgerOverlay,
} from './BurgerMenu.styled';

export default function BurgerMenu({ onClick }) {
  return (
    <BurgerOverlay>
      <BurgerList>
        <BurgerItem>
          <BurgerLink onClick={onClick} to="/diary">
            Diary
          </BurgerLink>
        </BurgerItem>
        <BurgerItem>
          <BurgerLink onClick={onClick} to="/calculator">
            Calculator
          </BurgerLink>
        </BurgerItem>
      </BurgerList>
    </BurgerOverlay>
  );
}
