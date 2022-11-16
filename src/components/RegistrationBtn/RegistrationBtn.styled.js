import styled from 'styled-components';
export const RegisterBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 182px;
  height: 44px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #fc842d;
  background-color: #fff;
  border: 2px solid #fc842d;
  border-radius: 30px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fff;
    background-color: #fc842d;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-left: 32px;
  }
`;
