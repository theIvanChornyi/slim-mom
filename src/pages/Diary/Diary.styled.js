import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const DiaryBox = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.minTablet} {
    padding: 0 60px;
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const ProductContainer = styled.div`
  position: relative;
`;
export const Gradient = styled.div`
  display: none;

  @media ${breakpoints.minTablet} {
    display: block;
    position: absolute;

    left: 0;
    bottom: 35px;

    width: 500px;
    height: 50px;
    display: block;
    background: ${p =>
      p.theme.gradient
        ? `linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.5) 0%,
        #fff 50%
      )`
        : 'transparent'};
  }

  @media ${breakpoints.desktop} {
    bottom: 120px;
    width: 520px;
    height: 50px;
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
