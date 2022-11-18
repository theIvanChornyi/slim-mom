import * as yup from 'yup';
export const calcSchema = yup
  .object({
    height: yup.number().required().positive().integer().min(100).max(250),
    age: yup.number().required().positive().integer().min(18).max(100),
    weight: yup.number().required().positive().integer().min(20).max(500),
    desiredWeight: yup
      .number()
      .required()
      .positive()
      .integer()
      .min(20)
      .max(500),
    bloodType: yup.number().required().positive().integer().min(1).max(4),
  })
  .required();
