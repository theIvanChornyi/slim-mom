import LoginBtn from 'components/LoginBtn';
import { ContainerBtn } from 'components/RegistrationForm/RegistrationForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInThunk } from 'redux/auth/thunk.auth';
import {
  AuthForm,
  AuthInput,
  AuthLabel,
  AuthTitle,
  RegisterLink,
} from './LoginForm.styled';
import { loginSchema } from 'services/validation/loginSchema';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectSlimDaddy } from 'redux/slimDaddy/selectors.slimDaddy';

export default function LoginForm() {
  const isDaddy = useSelector(selectSlimDaddy);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();
  const onSubmit = async data => {
    try {
      const { user } = await dispatch(logInThunk(data)).unwrap();
      reset();
      toast.dismiss();
      navigate(`/${user.id}/diary`);
    } catch (error) {}
  };

  const { email, password } = errors;
  const errorMessage = email?.message || password?.message;

  useEffect(() => {
    toast.error(errorMessage);
  }, [errorMessage]);
  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle>Sign In</AuthTitle>
        <AuthLabel htmlFor="email">
          Email *
          <AuthInput
            {...register('email')}
            id="email"
            required
            name="email"
            type="email"
          />
        </AuthLabel>
        <AuthLabel htmlFor="password">
          Password *
          <AuthInput
            {...register('password')}
            id="password"
            required
            name="password"
            type="password"
          />
        </AuthLabel>
        <ContainerBtn>
          <LoginBtn />
          <RegisterLink to="/registration">Register</RegisterLink>
        </ContainerBtn>
      </AuthForm>
    </>
  );
}
