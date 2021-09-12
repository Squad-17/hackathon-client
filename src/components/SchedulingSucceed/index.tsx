import { Link } from 'react-router-dom';
import Button from '../Button';
import { ReactComponent as ComputerGuy } from '../../assets/computer-guy.svg';

import * as S from './styles';

import { Informations } from '../../pages/Scheduling';

type SchedulingSucceedProps = {
  informations: Informations;
};

export default function SchedulingSucceed({
  informations,
}: SchedulingSucceedProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          Parabéns,
          <br /> Agendamento confirmado
        </S.Title>

        <ComputerGuy />

        <Link
          to={{
            pathname: '/cancelar-agendamento',
            state: { localId: informations.localId, data: informations.data },
          }}
        >
          Cancelar agendamento
        </Link>
      </S.Wrapper>

      <S.ButtonWrapper>
        <Link to='/'>
          <Button>Dashboard</Button>
        </Link>
      </S.ButtonWrapper>
    </>
  );
}
