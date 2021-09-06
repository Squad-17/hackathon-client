import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../hooks/auth';
import { FieldErrors, signInValidate } from '../../utils/validations';

import * as S from './styles';

export default function SignIn() {
  const [formError, setFormError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const { signIn } = useAuth();
  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setFormError('');

    const errors = signInValidate(values);

    if (Object.keys(errors).length) {
      setFieldErrors(errors);

      return;
    }

    setFieldErrors({});

    const { email, password: senha } = values;

    signIn({ email, senha })
      .then(() => {
        history.push('/agendar');
      })
      .catch((error) => {
        setFormError(error.response.data.erro);
      });
  }

  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }));
  }

  function goToSignUp() {
    history.push('/cadastrar');
  }

  return (
    <div>
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
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

        <button type='submit'>Enviar</button>
      </form>

      {formError && <S.FormError>{formError}</S.FormError>}

      <button onClick={goToSignUp}>Não está cadastrado? Cadastre-se</button>
    </div>
  );
}
