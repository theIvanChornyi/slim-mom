import CalendarButton from './CalendarButton/CalendarButton';
import { DateContainer, DateString } from './DatePicker.styled';

export default function DatePicker() {
  return (
    <DateContainer>
      <DateString>20.06.2020</DateString>
      <CalendarButton />
    </DateContainer>
  );
}
