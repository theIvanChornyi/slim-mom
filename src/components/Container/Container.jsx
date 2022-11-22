import { ContainerStyled } from './Container.styled';
import PropTypes from 'prop-types';

export const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);

Container.propTypes = {
  children: PropTypes.node,
};
