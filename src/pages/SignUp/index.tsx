import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../hooks/auth';
import { FieldErrors, signUpValidate } from '../../utils/validations';

import * as S from './styles';

export default function SignUp() {
  const [formError, setFormError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { signUp } = useAuth();
  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setFormError('');

    const errors = signUpValidate(values);

    if (Object.keys(errors).length) {
      setFieldErrors(errors);

      return;
    }

    setFieldErrors({});

    const { name: nome, email, password: senha } = values;

    signUp({ nome, email, senha })
      .then(() => {
        history.push('/agendar');
      })
      .catch((error) => {
        setFormError(error.response.data.erro);

        return;
      });
  }

  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }));
  }

  function goToSignIn() {
    history.push('/login');
  }

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nome:</label>
          <input
            type='name'
            placeholder='name'
            id='name'
            onChange={(e) => handleInput('name', e.target.value)}
          />

          {fieldErrors.name && <S.FieldError>{fieldErrors.name}</S.FieldError>}
        </div>

        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='email'
            id='email'
            onChange={(e) => handleInput('email', e.target.value)}
          />

          {fieldErrors.email && (
            <S.FieldError>{fieldErrors.email}</S.FieldError>
          )}
        </div>

        <div>
          <label htmlFor='password'>Senha:</label>
          <input
            type='password'
            placeholder='password'
            id='password'
            onChange={(e) => handleInput('password', e.target.value)}
          />

          {fieldErrors.password && (
            <S.FieldError>{fieldErrors.password}</S.FieldError>
          )}
        </div>

        <div>
          <label htmlFor='confirmPassword'>Confirmar senha:</label>
          <input
            type='password'
            placeholder='confirmPassword'
            id='confirmPassword'
            onChange={(e) => handleInput('confirmPassword', e.target.value)}
          />

          {fieldErrors.confirmPassword && (
            <S.FieldError>{fieldErrors.confirmPassword}</S.FieldError>
          )}
        </div>

        <button type='submit'>Enviar</button>
      </form>

      {formError && <S.FormError>{formError}</S.FormError>}

      <button onClick={goToSignIn}>já está cadastrado, faça o login.</button>
    </div>
  );
}
