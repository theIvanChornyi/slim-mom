import {
  BurgerItem,
  BurgerLink,
  BurgerList,
  BurgerOverlay,
} from './BurgerMenu.styled';

export default function BurgerMenu({ onClick, UserId }) {
  return (
    <BurgerOverlay>
      <BurgerList>
        <BurgerItem>
          <BurgerLink onClick={onClick} to={`/${UserId}/diary`}>
            Diary
          </BurgerLink>
        </BurgerItem>
        <BurgerItem>
          <BurgerLink onClick={onClick} to={`/${UserId}/calculator`}>
            Calculator
          </BurgerLink>
        </BurgerItem>
      </BurgerList>
    </BurgerOverlay>
  );
}
