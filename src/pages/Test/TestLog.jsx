import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInThunk, logOutThunk } from 'redux/auth/thunk.auth';

export const TestLog = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(logInThunk(data));
  };
  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      <button onClick={handleLogOut}>LogOut</button>
    </section>
  );
};
