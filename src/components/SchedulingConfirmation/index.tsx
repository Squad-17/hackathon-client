import api from '../../services/api';
import Button from '../Button';

import * as S from './styles';

import { Informations } from '../../pages/Scheduling';

type SchedulingConfirmationProps = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  informations: Informations;
};

function getFormatedDate(date: string) {
  const newDate = new Date(date).toISOString().substring(0, 10);
  const formatedDate = newDate.split('-').reverse().join('/');

  return formatedDate;
}

export default function SchedulingConfirmation({
  setCurrentStep,
  informations,
}: SchedulingConfirmationProps) {
  async function handleSubmitScheduling() {
    if (!informations.localId || !informations.data) return;

    api
      .post('agendamento', {
        data: informations.data,
        localId: informations.localId,
      })
      .then(() => {
        setCurrentStep((s) => ++s);
      })
      .catch((error) => console.log(error));
  }

  return (
    <S.Wrapper>
      <S.Title>Confirmar agendamento?</S.Title>

      <S.Local>
        <h3>Local</h3>

        <p>{informations.cidade}</p>
        <p>{informations.endereco}</p>
      </S.Local>

      <S.Date>
        <h3>Data</h3>

        <p>{informations.diaDaSemana}</p>
        <p>{getFormatedDate(informations.data)}</p>
      </S.Date>

      <S.ButtonWrapper>
        <Button className='outlined' onClick={() => setCurrentStep((s) => --s)}>
          Cancelar
        </Button>
        <Button onClick={handleSubmitScheduling}>Confirmar</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
