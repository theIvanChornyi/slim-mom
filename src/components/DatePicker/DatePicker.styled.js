import styled from 'styled-components';
import Calendar from 'react-calendar';

export const DateContainer = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 40px;
`;
export const DateString = styled.p`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;

  color: #212121;
`;

export const MyCalendar = styled(Calendar)`
  position: absolute;
  left: 0;
  right: 0;
`;
