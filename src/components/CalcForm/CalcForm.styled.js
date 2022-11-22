import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 610px;

  padding-top: 42px;
  padding-bottom: 30px;

  @media ${breakpoints.minTablet} {
    height: 610px;
    padding-top: 100px;
    margin-bottom: 65px;
  }

  @media ${breakpoints.desktop} {
    padding-top: 220px;
    margin-left: 0;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: rgba(33, 33, 33, 1);

  @media (min-width: 768px) {
    font-size: 34px;
    line-height: 1.4;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.minTablet} {
    margin-top: 28px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media ${breakpoints.desktop} {
    width: 520px;
  }
`;

export const LabelFirst = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;

  @media ${breakpoints.minTablet} {
    width: 240px;
  }
`;

export const CurrenValue = styled.p`
  color: black;
`;

export const BloodTitle = styled.p`
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  margin-top: 32px;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;

  @media ${breakpoints.minTablet} {
    margin-top: 40px;
    &:last-child {
      margin-top: 40px;
    }
  }

  & .tooltiptext {
    visibility: hidden;
    width: fit-content;
    background-color: #e0e0e0;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 5px 10px;
    position: absolute;
    z-index: 1;
    bottom: 100%;

    opacity: 0;
    transition: opacity 1s;
  }

  &:hover.tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export const TextInp = styled.input`
  background-color: transparent;
  display: block;
  border: none;
  width: 100%;
  border-bottom: 1px solid rgb(224, 224, 224);
  color: ${p => p.theme.modalTextColor};

  &:hover,
  &:focus {
    outline: none;
  }

  &:focus,
  :hover + :valid {
    border-bottom: 1px solid rgba(0, 255, 55, 0.671);
  }

  &:focus,
  :hover + :invalid {
    border-bottom: 1px solid rgba(255, 0, 0, 0.671);
  }
`;

export const List = styled.ul`
  color: rgba(155, 159, 170, 1);
  margin-top: 8px;
  display: inline-flex;
  width: 100%;
  flex-flow: row no-wrap;
  gap: 24px;

  @media ${breakpoints.minTablet} {
    border-top: 1px solid rgba(224, 224, 224, 1);
    padding-top: 8px;
  }
`;

export const RadioInp = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  cursor: pointer;

  &:checked + label {
    color: rgba(252, 132, 45, 1);
  }

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;

    &::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #e0e0e0;
      border-radius: 50%;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
  }

  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: #e0e0e0;
  }

  &:checked + label::before {
    text-align: center;
    background-image: url("data:image/svg+xml,%3Csvg width='48px' height='48px' viewBox='0 0 48 48' fill='%23fc842d' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='20' stroke='%23fc842d' stroke-width='4'/%3E%3C/svg%3E%0A");
  }

  &:disabled + label::before {
    background-color: #e9ecef;
  }
`;

export const ButtonCon = styled.div`
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    margin: 0;
  }

  @media ${breakpoints.desktop} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  margin-top: 40px;
  align-self: center;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  width: 210px;
  height: 43px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: 2px solid #fc842d;

  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.04em;

  color: #ffffff;
  cursor: pointer;

  @media ${breakpoints.minTablet} {
    margin-top: 30px;
    align-self: flex-start;
  }

  @media ${breakpoints.desktop} {
    align-self: flex-end;
  }

  &:hover,
  &:focus {
    color: #fc842d;
    background: transparent;
  }

  &:disabled {
    background: #9b9faa;
    box-shadow: 0px 4px 10px #9b9faa;
  }
`;
