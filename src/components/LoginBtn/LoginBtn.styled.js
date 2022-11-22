import styled from 'styled-components';
export const AuthBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 182px;
  height: 44px;
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #fff;
  background: #fc842d;
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
  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 0;
  }
`;
