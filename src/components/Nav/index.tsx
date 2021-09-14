import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router';

import * as S from './styles';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { name, signOut } = useAuth();
  const history = useHistory();

  function handleSignOut() {
    signOut();

    history.push('/login');
  }

  return (
    <S.Wrapper>
      <a href='https://www.fcamara.com.br/' target='_blank' rel='noreferrer'>
        <Logo />
      </a>

      <S.Menu>
        {!!name && (
          <S.Dropdown isOpen={isOpen} onClick={() => setIsOpen((s) => !s)}>
            <p>conta ▾</p>

            <ul>
              <li>
                <Link to='/'>Perfil</Link>
              </li>

              <li>
                <a onClick={handleSignOut}>Sair</a>
              </li>
            </ul>
          </S.Dropdown>
        )}

        <S.Language href='#'>PT/EN</S.Language>
      </S.Menu>
    </S.Wrapper>
  );
}
