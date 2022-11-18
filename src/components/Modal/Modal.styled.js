import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;

  @media ${breakpoints.maxMobile} {
    top: 120px;
  }
`;

export const ModalWindow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 320px;
  height: 100%;

  padding: 40px 20px 119px;
  background-color: #ffffff;
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 672px;
    height: 573px;
    padding: 64px 82px 81px;
  }
`;

export const ModulCloseBtn = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: inline-flex;
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.h2`
  min-width: 280px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.44;

  color: #212121;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 365px;
    font-size: 26px;
    line-height: 1.23;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Callories = styled.span`
  min-width: 279px;
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.04em;

  color: #264061;

  margin-bottom: 32px;

  @media (min-width: 768px) {
    width: 330px;
  }
`;

export const CalloriesText = styled(Callories)`
  font-size: 22px;
`;

export const ModulLine = styled.div`
  width: 280px;
  color: #e0e0e0;

  margin-bottom: 12px;

  border: 1px solid #e0e0e0;

  @media (min-width: 768px) {
    width: 330px;
  }
`;

export const FoodTitle = styled.p`
  min-width: 280px;
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #212121;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 330px;
  }
`;

export const FoodText = styled.ol`
  width: 280px;
  max-height: 112px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;

  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #9b9faa;
  list-style: number;

  margin-bottom: 40px;

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

  @media (min-width: 768px) {
    width: 330px;
  }
`;

export const RegisterBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 210px;
  height: 44px;
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #fff;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fc842d;
    background-color: #fff;
  }
  /* @media screen and (min-width: 768px) { */
  /* margin: 0; */
  /* margin-left: 32px; */
  /* } */
`;
