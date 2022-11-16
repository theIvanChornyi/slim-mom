import { Container } from 'components/Container';

import DiaryProductsList from 'components/DiaryProductsList';
import SideBar from 'components/SideBar';
import { DiaryBox, Gradient } from './Diary.styled';

export default function Diary() {
  return (
    <DiaryBox>
      <Container>
        <DiaryProductsList />
        <Gradient />
      </Container>
      <SideBar />
    </DiaryBox>
  );
}
