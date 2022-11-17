import CalcForm from 'components/CalcForm';
import { Container } from 'components/Container';
// import { useState } from 'react';
import { MainGrid } from './Home.styled';

export default function Home() {
  //   const [isLoading, setIsLoading] = useState(false);

  //   const submitForm = setIsLoading(true);
  return (
    <Container>
      <MainGrid>
        <CalcForm />
      </MainGrid>
    </Container>
  );
}
