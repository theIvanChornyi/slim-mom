import ThemeSwitcher from 'components/ThemeSwitcher';
import {
  BurgerItem,
  BurgerLink,
  BurgerList,
  BurgerOverlay,
} from './BurgerMenu.styled';

export default function BurgerMenu({ onClick, userId }) {
  return (
    <BurgerOverlay>
      <BurgerList>
        <BurgerItem>
          <ThemeSwitcher />
        </BurgerItem>

        <BurgerItem>
          <BurgerLink onClick={onClick} to={`/${userId}/diary`}>
            Diary
          </BurgerLink>
        </BurgerItem>
        <BurgerItem>
          <BurgerLink onClick={onClick} to={`/${userId}/calculator`}>
            Calculator
          </BurgerLink>
        </BurgerItem>
      </BurgerList>
    </BurgerOverlay>
  );
}
