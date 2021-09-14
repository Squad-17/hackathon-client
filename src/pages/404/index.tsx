import Container from '../../components/Container';
import Nav from '../../components/Nav';
import { ReactComponent as SadWoman } from '../../assets/sad-woman.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import * as S from './styles';

export default function PageNotFound() {
  const { name } = useAuth();

  return (
    <Container>
      <Nav />

      <S.Wrapper>
        <S.Title>Página não encontrada</S.Title>
        <SadWoman />

        <S.ButtonsWrapper>
          {name ? (
            <Link to='/'>
              <Button>Ir para dashboard</Button>
            </Link>
          ) : (
            <>
              <Link to='/login'>
                <Button className='outlined'>Fazer login</Button>
              </Link>

              <Link to='/cadastrar'>
                <Button>Cadastrar</Button>
              </Link>
            </>
          )}
        </S.ButtonsWrapper>
      </S.Wrapper>
    </Container>
  );
}
