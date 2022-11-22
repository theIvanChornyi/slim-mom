import * as yup from 'yup';

export const productSchema = yup
  .object({
    weight: yup.number().min(1).required(),
  })
  .required();
