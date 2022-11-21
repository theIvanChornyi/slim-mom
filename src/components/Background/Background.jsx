import { BackgroundStyled } from './Background.styled';

export const Background = ({ children, isAuth }) => {
  return <BackgroundStyled isAuth={isAuth}>{children}</BackgroundStyled>;
};
