import { useHistory } from 'react-router';

import FormSignUp from '../../components/FormSignUp';

import * as S from './styles';

export default function SignUp() {
  const history = useHistory();

  function goToSignIn() {
    history.push('/login');
  }

  return (
    <S.Wrapper>
      <S.Heading>Cadastre-se</S.Heading>

      <S.FormWrapper>
        <FormSignUp />

        <S.CallSignIn>
          <p>
            Já possui uma conta? <span onClick={goToSignIn}>Faça o login</span>
          </p>
        </S.CallSignIn>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
