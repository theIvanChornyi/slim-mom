import CalcForm from 'components/CalcForm';
import { Container } from 'components/Container';
import { MainGrid } from './Home.styled';

export default function Home() {
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <MainGrid>
        <CalcForm />
      </MainGrid>
    </Container>
  );
}
