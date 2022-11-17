import { AddBtn } from './DiaryAddBtn.styled';

export default function DiaryAddBtn({ onClick }) {
  return (
    <AddBtn type="button" onClick={onClick}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.72 7.96003H7.95997V13.72H6.03997V7.96003H0.279968V6.04003H6.03997V0.280029H7.95997V6.04003H13.72V7.96003Z"
          fill="white"
        />
      </svg>
    </AddBtn>
  );
}
