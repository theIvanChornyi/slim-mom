import { CalendarStyledBtn, Cross } from './CalendarButton.styled';

export default function CalendarButton({ onClick, showCalendar }) {
  return (
    <CalendarStyledBtn onClick={onClick} type="button">
      {!showCalendar ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 9H13V11H15V9Z" />
          <path d="M11 9H9V11H11V9Z" />
          <path d="M7.00008 9H5.00006V11H7.00008V9Z" />
          <path d="M17 2.00001H16V0H14V2.00001H6.00001V0H4V2.00001H3.00001C1.89001 2.00001 1.01003 2.90001 1.01003 4.00003L1 18C1 19.1 1.89001 20 3.00001 20H17C18.1 20 19 19.1 19 18V3.99998C19 2.90001 18.1 2.00001 17 2.00001ZM17 18H3.00001V6.99998H17V18Z" />
        </svg>
      ) : (
        <Cross
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6_1348)">
            <path d="M6 6L18 18" strokeWidth="2" />
            <path d="M6 18L18 6" strokeWidth="2" />
          </g>
          <defs>
            <clipPath id="clip0_6_1348">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </Cross>
      )}
    </CalendarStyledBtn>
  );
}
