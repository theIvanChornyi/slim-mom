import styled from 'styled-components';
import Calendar from 'react-calendar';
import { breakpoints } from 'helpers/breakpoints';

export const DateContainer = styled.div`
  position: relative;
  display: flex;
  gap: 10px;

  margin-top: 40px;
  @media ${breakpoints.minTablet} {
    margin-top: 90px;
  }
  @media ${breakpoints.desktop} {
    margin-top: 220px;
  }
`;
export const DateString = styled.p`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;

  @media ${breakpoints.minTablet} {
    font-size: 34px;
    line-height: 49px;
  }

  color: #212121;
`;

export const MyCalendar = styled(Calendar)`
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(25%);
`;
