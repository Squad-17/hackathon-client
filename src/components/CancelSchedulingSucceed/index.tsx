import { useHistory } from 'react-router';
import Button from '../Button';
import { ReactComponent as SadWoman } from '../../assets/sad-woman.svg';

import * as S from './styles';

export default function CancelSchedulingSucceed() {
  const history = useHistory();

  function goToDashboard() {
    history.push('/');
  }

  return (
    <S.Wrapper>
      <S.Title>Seu agendamento foi cancelado</S.Title>

      <SadWoman />

      <S.ButtonWrapper>
        <Button className='bigButtonOrange' onClick={goToDashboard}>
          Voltar para dashboard
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
