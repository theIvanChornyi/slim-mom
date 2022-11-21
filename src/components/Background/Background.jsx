import { useSelector } from 'react-redux';
import { selectSlimDaddy } from 'redux/slimDaddy/selectors.slimDaddy';
import { BackgroundStyled } from './Background.styled';

export const Background = ({ children, isAuth }) => {
  const isDaddy = useSelector(selectSlimDaddy);

  return (
    <BackgroundStyled isDaddy={isDaddy} isAuth={isAuth}>
      {children}
    </BackgroundStyled>
  );
};
