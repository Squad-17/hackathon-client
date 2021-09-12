import { useHistory } from 'react-router';
import Button from '../Button';
import { ReactComponent as ConfusedWoman } from '../../assets/confused-woman.svg';

import * as S from './styles';

export default function CancelSchedulingConfirmation() {
  const history = useHistory();

  function goToDashboard() {
    history.push('/');
  }

  return (
    <>
      <S.Wrapper>
        <S.Title>
          Tem certeza que deseja <br />
          cancelar?
        </S.Title>

        <ConfusedWoman />
      </S.Wrapper>

      <S.ButtonsWrapper>
        <Button className='outlined' onClick={goToDashboard}>
          Não
        </Button>
        <Button>Sim</Button>
      </S.ButtonsWrapper>
    </>
  );
}
