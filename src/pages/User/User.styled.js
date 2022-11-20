import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const UserPage = styled.section`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(240, 241, 243, 1) 50%
  );

  @media ${breakpoints.minTablet} {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 63%,
      rgba(240, 241, 243, 1) 63%
    );
  }

  @media ${breakpoints.desktop} {
    height: 100vh;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 65%,
      rgba(240, 241, 243, 1) 65%
    );
  }
`;
export const UserWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
