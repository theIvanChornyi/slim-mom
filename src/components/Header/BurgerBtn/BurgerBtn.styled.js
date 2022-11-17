import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';

export const MobileMenuBtn = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;

  background: transparent;
  cursor: pointer;
  @media ${breakpoints.desktop} {
    display: none;
  }
`;
