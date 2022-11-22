import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const UserPage = styled.section`
  min-width: 320px;
  background: ${p =>
    p.theme.gradient
      ? `linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 48%,
        rgba(240, 241, 243, 1) 48%
      )`
      : `linear-gradient(
        180deg,
        rgba(22,	81,	129, 0.3) 48%,
        #165181 48%
      )`};

  @media ${breakpoints.minTablet} {
    background: ${p =>
      p.theme.gradient
        ? `linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 60%,
        rgba(240, 241, 243, 1) 60%
      )`
        : `linear-gradient(
        180deg,
        rgba(22,	81,	129, 0.3) 60%,
        #165181 60%
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
