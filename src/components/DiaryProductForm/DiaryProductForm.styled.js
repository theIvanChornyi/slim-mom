import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';

export const ProductForm = styled.form`
  @media ${breakpoints.minTablet} {
    display: flex;
    gap: 22px;
    margin: 60px 0;
  }
`;

export const ProductNameInp = styled.input`
  display: block;
  width: 100%;
  padding-bottom: 5px;
  margin-top: 80px;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;

  color: ${p => p.theme.modalTextColor};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline: ${p =>
    !p.errorState ? 'none' : ' 3px ridge rgba(255, 99, 71, 0.8)'};
  border-radius: 4px;

  @media ${breakpoints.minTablet} {
    margin: 0;
    width: 240px;
  }
  ::placeholder {
    color: #9b9faa;
  }
`;
export const ProductWeightInp = styled.input`
  display: block;
  width: 100%;
  padding-bottom: 5px;
  margin-top: 32px;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;

  color: ${p => p.theme.modalTextColor};
  background-color: transparent;

  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline: none;

  @media ${breakpoints.minTablet} {
    margin: 0;
    max-width: 105px;
  }

  ::placeholder {
    color: #9b9faa;
    @media ${breakpoints.minTablet} {
      text-align: end;
    }
  }
`;

export const TabletBtn = styled.div`
  display: none;
  @media ${breakpoints.minTablet} {
    display: block;
  }
`;

export const MobileBtn = styled.div`
  display: block;
  @media ${breakpoints.minTablet} {
    display: none;
  }
`;
export const ProductAddBtn = styled.button`
  display: block;
  width: 176px;
  height: 44px;
  padding: 13px 46px;
  margin: 60px auto 0;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;

  color: #ffffff;

  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;

  :disabled {
    background-color: rgba(255, 99, 71, 0.8);
    opacity: 0.5;
    border: none;
    box-shadow: none;
  }
`;
