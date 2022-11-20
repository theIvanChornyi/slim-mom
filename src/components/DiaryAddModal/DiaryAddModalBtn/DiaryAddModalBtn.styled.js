import { breakpoints } from 'helpers/breakpoints';
import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animation = css`
  ${rotate};
`;

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;

  margin: 0 auto 60px;

  background: #fc842d;

  color: white;

  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color linear 250ms, stroke linear 250ms,
    border linear 250ms, box-shadow linear 250ms;
  :hover,
  :focus {
    background-color: white;
    stroke: #fc842d;
    border: 1px solid #fc842d;
    box-shadow: none;
  }

  :disabled {
    background-color: rgba(255, 99, 71, 0.8);
    opacity: 0.5;
    border: none;
    box-shadow: none;
  }
  @media ${breakpoints.minTablet} {
    margin: 0 0 0 90px;
  }
`;

export const Cross = styled.svg`
  animation-name: ${p => (p.state === 'pending' ? animation : 'none')};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
