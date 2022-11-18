import CalendarButton from './CalendarButton/CalendarButton';
import { DateContainer, DateString, MyCalendar } from './DatePicker.styled';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function DatePicker({ date, setDate }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const normalizedDate = date.toLocaleDateString('en-GB').split('/').join('.');

  const handleToogleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleCalendar = newDate => {
    setDate(new Date(newDate));
    setShowCalendar(false);
  };

  return (
    <DateContainer>
      <DateString>{normalizedDate}</DateString>
      <CalendarButton onClick={handleToogleCalendar} />
      {showCalendar && <MyCalendar onClickDay={handleCalendar} value={date} />}
    </DateContainer>
  );
}
