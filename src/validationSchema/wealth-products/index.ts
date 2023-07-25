import * as yup from 'yup';

export const wealthProductValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  organization_id: yup.string().nullable(),
  wealth_manager_id: yup.string().nullable(),
});
