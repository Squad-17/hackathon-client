import { Link } from 'react-router-dom';
import Button from '../Button';
import { ReactComponent as ComputerGuy } from '../../assets/computer-guy.svg';

import * as S from './styles';

export default function SchedulingSucceed() {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          Parabéns,
          <br /> Agendamento confirmado
        </S.Title>

        <ComputerGuy />

        <S.CancelScheduling>Cancelar agendamento</S.CancelScheduling>
      </S.Wrapper>

      <S.ButtonWrapper>
        <Link to='/'>
          <Button>Dashboard</Button>
        </Link>
      </S.ButtonWrapper>
    </>
  );
}
