import { ReactComponent as Logo } from '../../assets/logo.svg';

import * as S from './styles';

export default function Nav() {
  return (
    <S.Wrapper>
      <a href='https://www.fcamara.com.br/'>
        <Logo />
      </a>

      <S.Menu>
        <S.Language href='#'>PT/EN</S.Language>
      </S.Menu>
    </S.Wrapper>
  );
}
