import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import Container from '../../components/Container';
import FormSignIn from '../../components/FormSignIn';
import Nav from '../../components/Nav';
import Puzzle from '../../assets/puzzle.svg';
import Button from '../../components/Button';

import * as S from './styles';

export default function SignIn() {
  const history = useHistory();
  const { name } = useAuth();

  if (name) history.push('/');

  return (
    <Container>
      <Nav />

      <S.Wrapper>
        <img src={Puzzle} alt='Puzzle' />

        <S.FormWrapper>
          <S.Heading>Área de login</S.Heading>

          <FormSignIn />

          <Link to='/cadastrar'>
            <Button className='outlined'>Criar nova conta</Button>
          </Link>
          <S.ForgotPassword>
            <p>
              Esqueceu sua senha? <span>Alterar senha</span>
            </p>
          </S.ForgotPassword>
        </S.FormWrapper>
      </S.Wrapper>
    </Container>
  );
}
