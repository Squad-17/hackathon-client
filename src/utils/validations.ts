import Joi from 'joi';

const fieldsValidations = {
  name: Joi.string().required().messages({
    'string.empty': 'Este campo é obrigatório.',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Este campo é obrigatório.',
      'string.email': 'Preencha um email válido.',
    }),
  password: Joi.string().required().messages({
    'string.empty': 'Este campo é obrigatório.',
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'string.empty': 'Este campo é obrigatório.',
    'any.only': 'As senhas devem ser iguais.',
  }),
};

export type FieldErrors = {
  [key: string]: string;
};

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {};

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message;
    });
  }

  return errors;
}

type SignUpValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function signUpValidate(values: SignUpValues) {
  const schema = Joi.object(fieldsValidations);

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

type SignInValues = Pick<SignUpValues, 'email' | 'password'>;

export function signInValidate(values: SignInValues) {
  const { email, password } = fieldsValidations;
  const schema = Joi.object({ email, password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
