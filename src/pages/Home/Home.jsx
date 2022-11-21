import CalcForm from 'components/CalcForm';
import { Container } from 'components/Container';
import { MainGrid } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <MainGrid>
        <CalcForm />
      </MainGrid>
    </Container>
  );
}
