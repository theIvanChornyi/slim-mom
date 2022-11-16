import LoginBtn from 'components/LoginBtn';
import RegistrationBtn from 'components/RegistrationBtn';
import {
  ContainerBtn,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterTitle,
} from './RegistrationForm.styled';

export default function RegistrationForm() {
  return (
    <>
      <RegisterForm>
        <RegisterTitle>Register</RegisterTitle>

        <RegisterLabel htmlFor="name">
          Name *
          <RegisterInput id="name" required name="name" type="text" />
        </RegisterLabel>
        <RegisterLabel htmlFor="email">
          Email *
          <RegisterInput id="email" required name="email" type="email" />
        </RegisterLabel>
        <RegisterLabel htmlFor="password">
          Password *
          <RegisterInput
            id="password"
            required
            name="password"
            type="password"
          />
        </RegisterLabel>
      </RegisterForm>
      <ContainerBtn>
        <LoginBtn />
        <RegistrationBtn />
      </ContainerBtn>
    </>
  );
}
