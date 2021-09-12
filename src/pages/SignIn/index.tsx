import { useHistory } from 'react-router';

import Container from '../../components/Container';
import FormSignIn from '../../components/FormSignIn';
import Nav from '../../components/Nav';
import { ReactComponent as Puzzle } from '../../assets/computer-guy.svg';

import * as S from './styles';
import Button from '../../components/Button';
import LinkViewPages from '../../components/LinkViewPages';

export default function SignIn() {
  const history = useHistory();

  function goToSignUp() {
    history.push('/cadastrar');
  }

  return (
    <Container>
      <Nav />

      <LinkViewPages name="<< Home FCamara"
        href='https://www.fcamara.com.br/' target='_blank' rel='noreferrer'/>
      <S.Wrapper>
        <Puzzle />

        <S.FormWrapper>
          <S.Heading>Área de login</S.Heading>

          <FormSignIn />

          <Button onClick={goToSignUp} className='outlined'>Criar nova conta</Button>
                
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
