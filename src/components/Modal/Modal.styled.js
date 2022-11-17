import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 320px;
    height: 100%;

    padding: 40px 20px 119px;
    background-color: #FFFFFF;
    box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);


  @media (min-width: 768px) {
    width: 672px;
    height: 573px;
    padding: 64px 82px 81px;
   
  }

`;

export const ModulCloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
`;

export const ModalTitle = styled.h2`
    min-width: 280px;
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.44;

    color: #212121;

    margin-bottom: 40px;

 @media (min-width: 768px) {
    width: 365px;
    font-size: 26px;
    line-height: 1.23;
    text-align: center;
    margin-bottom: 20px;
 }
`;

export const Callories = styled.span`
    min-width: 279px;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.04em;

    color: #264061;

    margin-bottom: 32px;

    @media (min-width: 768px) {
        width: 330px;
    }
`;

export const CalloriesText = styled(Callories)`
    font-size: 22px;
`;

export const ModulLine = styled.div`
    width: 330px;
    /* height: 2px; */
    color: #E0E0E0;

    margin-bottom: 12px;

    border: 1px solid #E0E0E0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const FoodTitle = styled.p`
   min-width: 280px;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;

    color: #212121;

    margin-bottom: 20px;

    @media (min-width: 768px) {
        width: 330px;
    }
`;

export const FoodText = styled.ol`
    width: 222px;  

    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;

    color: #9B9FAA;
    list-style: number;

    margin-bottom: 40px;
`;