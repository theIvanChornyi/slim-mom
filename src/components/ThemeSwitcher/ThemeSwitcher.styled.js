import styled from 'styled-components';

export const Switcher = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }
`;
export const ThemeLight = styled.span`
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fc842d;
`;
export const ThemeDark = styled.span`
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: black;
`;
export const LabelSwitcher = styled.label`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
`;
export const ThemeCheckbox = styled.span`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #fc842d;
  border-radius: 20px;
  vertical-align: top;
  background-color: transparent;
  transition: 0.2s;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fc842d;
    transition: 0.15s;
  }
`;
export const InputSwitcher = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + ${ThemeCheckbox}::before {
    transform: translateX(20px);
    background-color: black;
  }
  &:not(:disabled) + ${ThemeCheckbox} {
    border-color: #fd5103;
    cursor: pointer;
  }
`;
