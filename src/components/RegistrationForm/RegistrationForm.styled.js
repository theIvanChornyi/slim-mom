import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-top: 40px;
  margin-bottom: 20px;
  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;
export const RegisterTitle = styled.h2`
  margin: 0;
  margin-bottom: 60px;
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fc842d;
  @media screen and (min-width: 768px) {
    padding-top: 160px;
    font-family: 'Raleway', sans-serif;
    line-height: 1.08px;
    text-align: left;
  }
`;
export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;
export const RegisterInput = styled.input`
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0;
  margin-bottom: 40px;
  color: ${p => p.theme.modalTextColor};
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;
export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 100px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 420px;
    gap: 0;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 180px;
  }
`;
export const LoginLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 182px;
  height: 44px;
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #fc842d;
  background-color: transparent;
  border: 2px solid #fc842d;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fff;
    background-color: #fc842d;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
