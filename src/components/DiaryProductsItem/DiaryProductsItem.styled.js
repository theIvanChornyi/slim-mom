import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ItemProducts = styled.li`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ProductName = styled.p`
  width: 180px;
  min-height: 24px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 5px;

  margin-right: -5px;

  font-family: 'Jost';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #212121;

  @media ${breakpoints.minTablet} {
    min-width: 240px;
    min-height: 36px;
    margin-right: 22px;

    line-height: 20px;

    color: #212121;
  }
  @media ${breakpoints.desktop} {
    min-height: 40px;
    margin-right: 22px;
  }
`;

export const Weight = styled.span`
  min-width: 50px;
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
    margin-right: 28px;
    text-align: right;
  }
  @media ${breakpoints.desktop} {
    height: 40px;
  }
`;

export const ButtonDelete = styled.button`
  margin: 0 12px 0 7px;
  background: transparent;
  border: 0;

  @media ${breakpoints.minTablet} {
    display: flex;
    margin-bottom: 6px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      /* transform: rotate(135deg); */
      cursor: pointer;
    }
  }
  & svg {
    stroke: #9b9faa;
  }

  &:disabled svg {
    stroke: tomato;
    animation-name: ${animation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;
