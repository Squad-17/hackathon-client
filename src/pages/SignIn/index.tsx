import { useHistory } from 'react-router';

import FormSignIn from '../../components/FormSignIn';

import * as S from './styles';

export default function SignIn() {
  const history = useHistory();

  function goToSignUp() {
    history.push('/cadastrar');
  }

  return (
    <S.Wrapper>
      <S.Heading>Área de login</S.Heading>

      <S.FormWrapper>
        <FormSignIn />

        <S.CallSignUp>
          <p>
            Não possui uma conta?{' '}
            <span onClick={goToSignUp}>Cadastre-se aqui</span>
          </p>
        </S.CallSignUp>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
