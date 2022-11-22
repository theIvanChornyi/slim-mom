import styled from 'styled-components';

export const FilterWrap = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 12px;
  align-content: center;
`;

export const FilterInput = styled.input`
  width: ${p => (p.isAuth ? '260px' : '280px')};
  padding: 3px;
  font-size: 13px;
  border-color: #264061;
  outline: none;
  border: none;

  border-bottom: 2px solid ${p => p.theme.modalTextColor};
  background: transparent;

  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${p => p.theme.modalTextColor};

  ::placeholder {
    color: ${p => p.theme.modalTextColor};
  }

  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: ${p => (p.isAuth ? '270px' : '330px')};
  }
`;
