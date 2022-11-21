import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const UserPage = styled.section`
  min-width: 320px;
  background: ${p =>
    p.theme.gradient
      ? `linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 50%,
        rgba(240, 241, 243, 1) 50%
      )`
      : `linear-gradient(
        180deg,
        rgba(22,	81,	129, 0.3) 50%,
        #165181 50%
      )`};

  @media ${breakpoints.minTablet} {
    background: ${p =>
      p.theme.gradient
        ? `linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 63%,
        rgba(240, 241, 243, 1) 63%
      )`
        : `linear-gradient(
        180deg,
        rgba(22,	81,	129, 0.3) 63%,
        #165181 63%
      )`};
  }

  @media ${breakpoints.desktop} {
    height: 100vh;
    background: transparent;
  }
`;

export const UserWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
