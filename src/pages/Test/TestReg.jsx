import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/thunk.auth';

export const TestReg = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(signUpThunk(data));
  };
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        Name
        <br />
        <input type="text" id="username" {...register('username')} />
        <br />
        <br />
        Email
        <br />
        <input type="email" id="email" {...register('email')} />
        <br />
        <br />
        Password
        <br />
        <input type="password" id="password" {...register('password')} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </section>
  );
};
