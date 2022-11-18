import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const DiaryBox = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Gradient = styled.div`
  display: none;
  position: absolute;
  left: 0;
  bottom: 56px;
  width: 653px;
  height: 50px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    #ffffff 42.19%
  );

  @media ${breakpoints.desktop} {
    display: block;
  }
`;

export const DairyAddProduct = styled.div`
  display: none;
  @media ${breakpoints.minTablet} {
    display: block;
  }
`;

export const DairyAddModalWrap = styled.div`
  display: block;
  @media ${breakpoints.minTablet} {
    display: none;
  }
`;
