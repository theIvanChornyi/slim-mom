import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const ItemProducts = styled.li`
  display: flex;

  @media ${breakpoints.minTablet} {
    padding-bottom: 20px;
  }
`;

export const ProductName = styled.p`
  width: 130px;
  height: 24px;
  margin-right: 8px;
  border-bottom: 1px solid #e0e0e0;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #212121;

  @media ${breakpoints.minTablet} {
    width: 240px;
    height: 36px;
    margin-right: 22px;
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
  margin-right: 8px;
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
  width: 62px;
  height: 24px;
  margin-right: 17px;
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
  padding: 0;
  margin: 0;
  background: transparent;
  border: 0;
`;
