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
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const dispatch = useDispatch();
  const onSubmit = async data => {
    try {
      const { user } = await dispatch(signUpThunk(data)).unwrap();
      reset();
      toast.dismiss();
      await navigate(`/${user.id}/calculator`);
    } catch (error) {}
  };

  const { username, email, password } = errors;
  const errorMessage = username?.message || email?.message || password?.message;
  useEffect(() => {
    toast.error(errorMessage);
  }, [errorMessage]);

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
