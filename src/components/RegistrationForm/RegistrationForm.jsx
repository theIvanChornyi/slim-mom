import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/thunk.auth';
import { LoginLink } from './RegistrationForm.styled';
import RegistrationBtn from 'components/RegistrationBtn';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'services/validation/registerSchema';
import {
  ContainerBtn,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterTitle,
} from './RegistrationForm.styled';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(signUpThunk(data));
    reset();
    toast.dismiss();
  };

  const { username, email, password } = errors;
  const errorMessage = username?.message || email?.message || password?.message;
  useEffect(() => {
    toast.error(errorMessage);
  }, [errors]);

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <RegisterTitle>Register</RegisterTitle>

        <RegisterLabel htmlFor="name">
          Name *
          <RegisterInput
            {...register('username')}
            id="name"
            required
            type="text"
          />
        </RegisterLabel>
        <RegisterLabel htmlFor="email">
          Email *
          <RegisterInput
            {...register('email')}
            id="email"
            required
            name="email"
            type="email"
          />
        </RegisterLabel>
        <RegisterLabel htmlFor="password">
          Password *
          <RegisterInput
            {...register('password')}
            id="password"
            required
            name="password"
            type="password"
          />
        </RegisterLabel>
        <ContainerBtn>
          <LoginLink to="/login">Login</LoginLink>
          <RegistrationBtn />
        </ContainerBtn>
      </RegisterForm>
    </>
  );
}
