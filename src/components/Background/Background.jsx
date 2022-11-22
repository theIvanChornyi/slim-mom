import { BackgroundStyled } from './Background.styled';
import PropTypes from 'prop-types';

export const Background = ({ children, isAuth }) => {
  return <BackgroundStyled isAuth={isAuth}>{children}</BackgroundStyled>;
};

Background.propTypes = {
  isAuth: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node),
};
