import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const ItemProducts = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  @media ${breakpoints.minTablet} {
    /* padding-bottom: 20px; */
  }
`;

export const ProductName = styled.p`
  width: 130px;
  height: 24px;
  border-bottom: 1px solid #e0e0e0;

  font-family: 'Jost';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #212121;

  @media ${breakpoints.minTablet} {
    width: 240px;
    height: 36px;
    margin-right: 22px;

    line-height: 20px;

    color: #212121;
  }
  @media ${breakpoints.desktop} {
    width: 240px;
    height: 40px;
    margin-right: 48px;
  }
`;

export const Weight = styled.span`
  width: 50px;
  height: 24px;

  padding: 0 1px;
  border-bottom: 1px solid #e0e0e0;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.04em;

  color: #212121;

  @media ${breakpoints.minTablet} {
    width: 106px;
    height: 36px;
    margin-right: 46px;
  }
  @media ${breakpoints.desktop} {
    width: 107px;
    height: 40px;
    margin-right: 32px;
  }
`;

export const Kcal = styled.span`
  width: 64px;
  height: 24px;

  padding: 0 1px;

  border-bottom: 1px solid #e0e0e0;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.04em;

  color: #212121;

  @media ${breakpoints.minTablet} {
    width: 106px;
    height: 36px;
    margin-right: 32px;
    text-align: right;
  }
  @media ${breakpoints.desktop} {
    height: 40px;
  }
`;

export const ButtonDelete = styled.button`
  padding: 10px;
  margin: 0 0 0 7px;
  background: transparent;
  border: 0;
`;
