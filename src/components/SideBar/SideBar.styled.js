import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import leaves from '../../helpers/images/leaves-aside-tablet.png';
import leavesBig from '../../helpers/images/leaves-desktop-aside.png';

export const AsideBox = styled.aside`
  margin: 0 -20px;
  background: ${p => p.theme.sideBarColor};
  padding: 40px 20px;
  min-width: 280px;
  min-height: 433px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 40px;

  @media ${breakpoints.minTablet} {
    margin: 0 -32px;
    width: 100%;
    min-height: 166px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 80px 88px;
    background-image: url(${leaves});
    background-repeat: no-repeat;
    background-position: top -180;
  }

  @media ${breakpoints.desktop} {
    margin: 0 -32px;
    background: ${p => p.theme.sideBarColor};

    margin-left: auto;
    gap: 60px;
    padding: 0;
    width: 497px;
    height: 850px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${leavesBig});
    background-repeat: no-repeat;
    background-position: 0 -80%;
    overflow: auto;
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

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 200px;
  gap: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #e2e2e2;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #264061;
  }
`;
