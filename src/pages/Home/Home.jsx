import CalcForm from 'components/CalcForm';
import { Container } from 'components/Container';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { MainGrid, ThemeSwitcherBox } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <MainGrid>
        <CalcForm />
      </MainGrid>
      <ThemeSwitcherBox>
        <ThemeSwitcher />
      </ThemeSwitcherBox>
    </Container>
  );
}
