import Container from '../../components/Container';
import FormSignIn from '../../components/FormSignIn';
import Nav from '../../components/Nav';
import Puzzle from '../../assets/puzzle.svg';
import Button from '../../components/Button';

import * as S from './styles';
import { Link } from 'react-router-dom';

export default function SignIn() {
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
