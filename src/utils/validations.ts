import Joi from 'joi';

const fieldsValidations = {
  name: Joi.string()
    .regex(/^[a-zA-Z].{3,}$/)
    .required()
    .messages({
      'string.empty': 'Este campo é obrigatório.',
      'string.pattern.base':
        'Nome do funcionário deve conter pelo menos 3 caracteres e não possuir números.',
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Este campo é obrigatório.',
      'string.email': 'Preencha um email válido.',
    }),
  password: Joi.string()
    .regex(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
    .required()
    .messages({
      'string.empty': 'Este campo é obrigatório.',
      'string.pattern.base':
        'Senha deve conter pelo menos 1 letra minúscula, 1 número e 8 caracteres',
    }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'string.empty': 'Este campo é obrigatório.',
    'any.only': 'As senhas não conferem.',
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
