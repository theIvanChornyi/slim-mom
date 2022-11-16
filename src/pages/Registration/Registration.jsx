import { Background } from 'components/Background';
import { Container } from 'components/Container';
import RegistrationForm from 'components/RegistrationForm';

export default function Registration() {
  return (
    <Background>
      <Container>
        <RegistrationForm />;
      </Container>
    </Background>
  );
}
