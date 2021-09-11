import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../hooks/auth';

import { FieldErrors, signUpValidate } from '../../utils/validations';
import TextField from '../TextField';
import Button from '../Button';

import * as S from './styles';

export default function FormSignUp() {
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
      });
  }

  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }));
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Nome'
          type='text'
          name='name'
          placeholder='Nome completo'
          error={fieldErrors.name}
          onInputChange={(v) => handleInput('name', v)}
        />

        <TextField
          label='Email'
          type='email'
          name='email'
          placeholder='email@email.com'
          error={fieldErrors.email}
          onInputChange={(v) => handleInput('email', v)}
        />

        <TextField
          label='Senha'
          name='password'
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          type='password'
          error={fieldErrors.password}
          onInputChange={(v) => handleInput('password', v)}
        />

        <TextField
          label='Confirmar Senha'
          name='confirmPassword'
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          type='password'
          error={fieldErrors.confirmPassword}
          onInputChange={(v) => handleInput('confirmPassword', v)}
        />

        <S.ButtonWrapper>
          <Button className='bigButtonOrange' type='submit'>Cadastrar</Button>
        </S.ButtonWrapper>
      </form>

      {formError && (
        <S.FormError>
          <p>{formError}</p>
        </S.FormError>
      )}
    </S.Wrapper>
  );
}
