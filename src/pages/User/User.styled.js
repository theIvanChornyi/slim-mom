import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import leavesBig from '../../helpers/images/leaves-desktop-aside.png';

export const UserPage = styled.section`
  background: rgb(255, 255, 255);
  min-width: 320px;
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
    margin-right: -16px;
    height: 100vh;
    background: transparent;
    /* background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 65%,
      rgba(240, 241, 243, 1) 65%
    ); */
    /* background-image: url(${leavesBig});
    background-repeat: no-repeat;
    background-position: right -180; */
  }
`;

export const UserWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
