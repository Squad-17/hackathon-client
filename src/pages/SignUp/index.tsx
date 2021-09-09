import { useHistory } from 'react-router';

import Container from '../../components/Container';
import FormSignUp from '../../components/FormSignUp';
import Nav from '../../components/Nav';
import { ReactComponent as ComputerGuy } from '../../assets/computer-guy.svg';

import * as S from './styles';

export default function SignUp() {
  const history = useHistory();

  function goToSignIn() {
    history.push('/login');
  }

  return (
    <Container>
      <Nav />

      <S.Wrapper>
        <ComputerGuy />

        <S.FormWrapper>
          <S.Heading>Cadastre-se</S.Heading>

          <FormSignUp />

          <S.CallSignIn>
            <p>
              Já possui uma conta?{' '}
              <span onClick={goToSignIn}>Faça o login</span>
            </p>
          </S.CallSignIn>
        </S.FormWrapper>
      </S.Wrapper>
    </Container>
  );
}
