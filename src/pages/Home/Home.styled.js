import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';

export const MainGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ThemeSwitcherBox = styled.div`
  text-align: center;
  @media ${breakpoints.desktop} {
    display: none;
  }
`;
