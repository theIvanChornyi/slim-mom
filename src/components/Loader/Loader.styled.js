import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  from {
    transform: translate(-45%, +2%) rotate(0deg) ;
  }
  to {
    transform: translate(-45%, +2%) rotate(360deg) ;
  }
`;
export const Container = styled.div`
  z-index: 9999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
`;
export const SpinnerContainer = styled.div`
  width: 100%;
  height: auto;
`;
export const Spinner = styled.div`
  width: 35px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  z-index: 10000;
  position: absolute;
  top: 50%;
  left: 50%;

  animation: ${rotate} 2s linear infinite;

  transition: transform 250ms;
`;
export const Arrow = styled.img`
  display: block;
  transform: scale(2);
  height: auto;
`;
