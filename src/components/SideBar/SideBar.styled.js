import styled from 'styled-components';
import leaves from '../../helpers/images/leaves-aside-tablet.png';
import leavesBig from '../../helpers/images/leaves-desktop@2.png';

export const AsideBox = styled.aside`
  margin: 0 -20px;
  background: #f0f1f3;
  padding: 40px 20px;
  min-width: 280px;
  min-height: 433px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    width: 100%-64px;
    min-height: 166px;
    flex-direction: row;
    align-items: flex-start;
    gap: 80px;
    padding: 80px 32px;
    background-image: url(${leaves});
    background-repeat: no-repeat;
  }
  @media (min-width: 1280px) {
    gap: 60px;
    padding: 0;
    width: 497px;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-image: url(${leavesBig});
    background-repeat: no-repeat;
    background-position: right 0;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #212121;

  @media screen and (min-width: 1280px) {
    margin-bottom: 38px;
  }
`;

export const Div = styled.div`
  min-width: 280px;
  max-width: 520px;

  @media screen and (min-width: 768px) {
    width: 244px;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
  }
`;

export const KcalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const KcalItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;
