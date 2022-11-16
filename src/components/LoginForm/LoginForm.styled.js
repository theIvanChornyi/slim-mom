import styled from 'styled-components';
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 7px;
    padding-left: 25px;
    padding-right: 5px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0;
    margin-left: 15px;
  }
`;
export const AuthTitle = styled.h2`
  margin: 0;
  margin-bottom: 60px;
  font-family: 'Verdana';
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fc842d;
  @media screen and (min-width: 768px) {
    padding-top: 160px;
    font-family: 'Gotham Pro';
    line-height: 1.08px;
    text-align: left;
  }
`;
export const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;
export const AuthInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0;
  /* padding-top: 20px; */
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;
export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: 25px;
    padding-bottom: 495px;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 255px;
    margin-left: 15px;
  }
`;
