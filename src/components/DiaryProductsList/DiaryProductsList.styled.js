import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const ListProducts = styled.ul`
  margin: 22px 0 60px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 240px;

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
    gap: 22px;
    max-width: 610px;
    height: 286px;
    margin: 0 0 55px;
    padding-right: 30px;
  }
  @media ${breakpoints.desktop} {
    height: 280px;
    margin: 60px auto 32px 0;
  }
`;

export const Text = styled.p`
  font-family: 'Jost';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  margin: 40px 0;

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
