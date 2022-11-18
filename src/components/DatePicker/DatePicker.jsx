import CalendarButton from './CalendarButton/CalendarButton';
import { DateContainer, DateString, MyCalendar } from './DatePicker.styled';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DatePicker({ date, setDate }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const normalizedDate = date.toLocaleDateString('en-GB').replaceAll('/', '.');

  const handleToogleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const handleCloseCalendar = e => {
    if (e.key === 'Escape') setShowCalendar(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseCalendar);
    return () => {
      window.removeEventListener('keydown', handleCloseCalendar);
    };
  }, []);

  const handleCalendar = newDate => {
    setDate(new Date(newDate));
    setShowCalendar(false);
  };

  return (
    <DateContainer>
      <DateString>{normalizedDate}</DateString>
      <CalendarButton
        showCalendar={showCalendar}
        onClick={handleToogleCalendar}
      />
      {showCalendar && <MyCalendar onClickDay={handleCalendar} value={date} />}
    </DateContainer>
  );
}
