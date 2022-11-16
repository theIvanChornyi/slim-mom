import { Background } from 'components/Background';
import { Container } from 'components/Container';
import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <Background>
      <Container>
        <LoginForm />
      </Container>
    </Background>
  );
}
