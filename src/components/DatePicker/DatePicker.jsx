import CalendarButton from './CalendarButton/CalendarButton';
import { DateContainer, DateString, MyCalendar } from './DatePicker.styled';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DatePicker({ date, setDate }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const initCalendarDay = new Date(searchParams.get('date') || date);

  const normalizedDate = initCalendarDay
    .toLocaleDateString('en-GB')
    .replaceAll('/', '.');

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

  const handleCalendar = async newDate => {
    const rawDate = new Date(newDate);
    setDate(rawDate);
    setShowCalendar(false);
    setSearchParams({ date: rawDate.toLocaleDateString('en-CA') });
  };

  return (
    <DateContainer>
      <DateString>{normalizedDate}</DateString>
      <CalendarButton
        showCalendar={showCalendar}
        onClick={handleToogleCalendar}
      />
      {showCalendar && (
        <MyCalendar
          maxDate={new Date()}
          onClickDay={handleCalendar}
          value={date}
        />
      )}
    </DateContainer>
  );
}
DatePicker.propTypes = {
  date: PropTypes.object,
  setDate: PropTypes.func,
};
