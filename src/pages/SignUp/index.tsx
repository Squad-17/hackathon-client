import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import FormSignUp from '../../components/FormSignUp';
import Nav from '../../components/Nav';
import Puzzle from '../../assets/puzzle.svg';

import * as S from './styles';

export default function SignUp() {
  return (
    <Container>
      <Nav />

      <S.Wrapper>
        <img src={Puzzle} alt='Puzzle' />

        <S.FormWrapper>
          <S.Heading>Cadastre-se</S.Heading>

          <FormSignUp />

          <S.CallSignIn>
            <p>
              Já possui uma conta? <Link to='/login'>Faça o login</Link>
            </p>
          </S.CallSignIn>
        </S.FormWrapper>
      </S.Wrapper>
    </Container>
  );
}
