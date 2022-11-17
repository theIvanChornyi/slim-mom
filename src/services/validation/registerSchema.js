import * as yup from 'yup';
export const registerSchema = yup
  .object({
    username: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();
