import styled, { keyframes } from 'styled-components';
import Calendar from 'react-calendar';
import { breakpoints } from 'helpers/breakpoints';

const animation = keyframes`
  50% {
    color: rgb(252, 132, 45);
  }
`;

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

  animation-name: ${p => (p.state === 'pending' ? animation : 'none')};
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const MyCalendar = styled(Calendar)`
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(25%);

  &.react-calendar {
    background: ${p => p.theme.modalColor};
    border-radius: 4px;
    overflow: hidden;
  }

  & button:disabled,
  & button:disabled.react-calendar__navigation__arrow {
    background: ${p => p.theme.calendarColor};
  }
`;
