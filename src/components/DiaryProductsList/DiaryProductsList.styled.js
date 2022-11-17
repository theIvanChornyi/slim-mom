import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const ListProducts = styled.ul`
  margin: 60px auto 32px auto;
  height: 200px;
  max-width: 310px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3; /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #264061; /* цвет бегунка */
    /* border-radius: 20px; округлось бегунка */
    /* border: 3px solid orange; отступ вокруг бегунка */
  }

  @media ${breakpoints.minTablet} {
    gap: 16px;
    height: 250px;
    max-width: 610px;
  }
  @media ${breakpoints.desktop} {
    height: 280px;
    margin: 60px auto 32px 0;
  }
`;
