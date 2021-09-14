import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../hooks/auth';

import { FieldErrors, signInValidate } from '../../utils/validations';
import TextField from '../TextField';
import Button from '../Button';
import { ReactComponent as EyeOf } from '../../assets/eye-off.svg';
import { ReactComponent as Eye } from '../../assets/eye.svg';

import * as S from './styles';

export default function FormSignIn() {
  const [visible, setVisible] = useState(false);
  const [typepassword, setTypePassword] = useState('password');
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
        history.push('/');
      })
      .catch((error) => {
        setFormError(error.response.data.erro);
      });
  }

  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }));
  }

  function handleVisible() {
    if (visible === true) {
      setVisible(false);
      setTypePassword('password');
    } else {
      setVisible(true);
      setTypePassword('text');
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Email'
          type='email'
          name='email'
          placeholder='email@email.com'
          error={fieldErrors.email}
          onInputChange={(v) => handleInput('email', v)}
        />

        <div className='container-input'>
          <TextField
            id='test'
            label='Senha'
            type={typepassword}
            name='password'
            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
            error={fieldErrors.password}
            onInputChange={(v) => handleInput('password', v)}
            maxLength={30}
          />
          {!visible ? (
            <EyeOf className='icon-eye' onClick={handleVisible} />
          ) : (
            <Eye className='icon-eye' onClick={handleVisible} />
          )}
        </div>

        <S.ButtonWrapper>
          <Button type='submit'>Fazer login</Button>
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
