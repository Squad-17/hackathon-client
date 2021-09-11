import { useHistory } from 'react-router';

import Container from '../../components/Container';
import FormSignIn from '../../components/FormSignIn';
import Nav from '../../components/Nav';
import { ReactComponent as Puzzle } from '../../assets/computer-guy.svg';

import * as S from './styles';
import Button from '../../components/Button';

export default function SignIn() {
  const history = useHistory();

  function goToSignUp() {
    history.push('/cadastrar');
  }

  return (
    <Container>
      <Nav />

      <S.Wrapper>
        <Puzzle />

        <S.FormWrapper>
          <S.Heading>Área de login</S.Heading>

          <FormSignIn />

          <Button onClick={goToSignUp} className='bigButtonWhite'>Criar nova conta</Button>
                
          <S.CallSignUp>
            <p>
              Esqueceu sua senha?{' '}
              <span >Alterar senha</span>
            </p>
          </S.CallSignUp>
        </S.FormWrapper>
      </S.Wrapper>
    </Container>
  );
}
