import LoginBtn from 'components/LoginBtn';
import RegistrationBtn from 'components/RegistrationBtn';
import { ContainerBtn } from 'components/RegistrationForm/RegistrationForm.styled';
import { AuthForm, AuthInput, AuthLabel, AuthTitle } from './LoginForm.styled';
export default function LoginForm() {
  return (
    <>
      <AuthForm>
        <AuthTitle>Sign In</AuthTitle>

        <AuthLabel htmlFor="email">
          Email *
          <AuthInput id="email" required name="email" type="email" />
        </AuthLabel>
        <AuthLabel htmlFor="password">
          Password *
          <AuthInput id="password" required name="password" type="password" />
        </AuthLabel>
      </AuthForm>
      <ContainerBtn>
        <LoginBtn />
        <RegistrationBtn />
      </ContainerBtn>
    </>
  );
}
