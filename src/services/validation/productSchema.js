import * as yup from 'yup';

export const productSchema = yup
  .object({
    productId: yup.string().required(),
    weight: yup.number().min(1).required(),
  })
  .required();
