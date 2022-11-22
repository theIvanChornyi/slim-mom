import styled from 'styled-components';
export const CalendarStyledBtn = styled.button`
  padding: 10px;
  height: 48px;
  background: transparent;
  border: none;

  transition: fill linear 200ms;
  &:hover,
  &:focus {
    fill: ${p => p.theme.modalBorderColor};

    cursor: pointer;
  }
`;

export const Cross = styled.svg`
  stroke: #212121;
  transition: stroke linear 200ms;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.modalBorderColor};

    cursor: pointer;
  }
`;
