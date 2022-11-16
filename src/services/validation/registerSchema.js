import * as yup from 'yup';
export const registerSchema = yup
  .object({
    username: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();
