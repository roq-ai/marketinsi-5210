import * as yup from 'yup';

export const financialServiceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  organization_id: yup.string().nullable(),
  financial_advisor_id: yup.string().nullable(),
});
