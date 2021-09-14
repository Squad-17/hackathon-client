import { useHistory } from 'react-router';
import api from '../../services/api';
import Button from '../Button';
import { ReactComponent as ConfusedWoman } from '../../assets/confused-woman.svg';

import * as S from './styles';

type Informations = {
  localId: number;
  data: string;
};

type CancelSchedulingConfirmationProps = {
  informations: Informations;
  setConfirmedCancellation: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CancelSchedulingConfirmation({
  informations,
  setConfirmedCancellation,
}: CancelSchedulingConfirmationProps) {
  const history = useHistory();

  function goToDashboard() {
    history.push('/');
  }

  async function handleCancel() {
    if (!informations.data || !informations.localId) return;

    api
      .delete('agendamento', {
        data: { data: informations.data, localId: informations.localId },
      })
      .then(() => {
        setConfirmedCancellation(true);
      })
      .catch((error) => console.log(error));
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
        <Button onClick={handleCancel}>Sim</Button>
      </S.ButtonsWrapper>
    </>
  );
}
