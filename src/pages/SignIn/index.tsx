import { useHistory } from 'react-router';

import Container from '../../components/Container';
import FormSignIn from '../../components/FormSignIn';
import Nav from '../../components/Nav';
import { ReactComponent as ComputerGuy } from '../../assets/computer-guy.svg';

import * as S from './styles';

export default function SignIn() {
  const history = useHistory();

  function goToSignUp() {
    history.push('/cadastrar');
  }

  return (
    <Container>
      <Nav />

      <S.Wrapper>
        <ComputerGuy />

        <S.FormWrapper>
          <S.Heading>Área de login</S.Heading>

          <FormSignIn />

          <S.CallSignUp>
            <p>
              Não possui uma conta?{' '}
              <span onClick={goToSignUp}>Cadastre-se aqui</span>
            </p>
          </S.CallSignUp>
        </S.FormWrapper>
      </S.Wrapper>
    </Container>
  );
}
