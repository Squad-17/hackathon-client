import { useEffect, useState } from 'react';

import api from '../../services/api';
import Button from '../Button';

import * as S from './styles';

import { Informations } from '../../pages/Scheduling';

type AvailableLocal = {
  id: number;
  cidade: string;
  endereco: string;
};

type AvailableDates = {
  data: string;
  disponivel: boolean;
  diaDaSemana: string;
  diaDoMes: number;
};

type LocalInformations = Pick<Informations, 'localId' | 'cidade' | 'endereco'>;

type FirstStepSchedulingProps = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setInformations: React.Dispatch<React.SetStateAction<Informations>>;
};

export default function FirstStepScheduling({
  setCurrentStep,
  setInformations,
}: FirstStepSchedulingProps) {
  const [availableLocals, setAvailableLocals] = useState<AvailableLocal[]>(
    [] as AvailableLocal[]
  );
  const [availableDates, setAvailableDates] = useState<AvailableDates[]>(
    {} as AvailableDates[]
  );
  const [selectedLocalId, setSelectedLocalId] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [localInformations, setLocalInformations] = useState<LocalInformations>(
    {} as LocalInformations
  );
  const [dateInformations, setDateInformations] = useState<AvailableDates>(
    {} as AvailableDates
  );
  const [error, setError] = useState(false);

  async function getAvailableDates(localId: number) {
    api
      .get(`agendamento/disponiveis/${localId}`)
      .then((data) => {
        setAvailableDates(data.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    setSelectedDate('');
    setDateInformations({} as AvailableDates);
    getAvailableDates(selectedLocalId);
  }, [selectedLocalId]);

  useEffect(() => {
    async function getAvailableLocals() {
      api
        .get('local')
        .then((data) => {
          const { id: localId, cidade, endereco } = data.data[0];

          setLocalInformations({ localId, cidade, endereco });
          setAvailableLocals(data.data);
        })
        .catch((error) => console.log(error));
    }

    getAvailableLocals();
  }, []);

  function handleSelectLocal(local: AvailableLocal, index: number) {
    setLocalInformations({
      localId: local.id,
      endereco: local.endereco,
      cidade: local.cidade,
    });

    setSelectedLocalId(index + 1);
  }

  function handleSelectDate(date: AvailableDates) {
    setSelectedDate(date.data);
    setDateInformations(date);
  }

  function goToConfirmation() {
    if (!localInformations.localId || !dateInformations.data) {
      setError(true);

      return;
    }

    setInformations({ ...localInformations, ...dateInformations });
    setCurrentStep((s) => ++s);
  }

  return (
    <S.Wrapper>
      <S.Title>Agendamento</S.Title>

      <S.Locals>
        <h3>Sede</h3>

        {availableLocals.length > 0 &&
          availableLocals.map((local, index) => {
            return (
              <div key={local.id} className='local'>
                <div className='select-wrapper'>
                  <button
                    className={
                      selectedLocalId === index + 1
                        ? 'button button-active'
                        : 'button'
                    }
                    onClick={() => handleSelectLocal(local, index)}
                  ></button>
                  <p className='city'>{local.cidade}</p>
                </div>

                <p className='address'>{local.endereco}</p>
              </div>
            );
          })}
      </S.Locals>

      <S.Dates>
        <h3>Data</h3>

        <ul className='dates'>
          {availableDates.length > 0 &&
            availableDates.map((date) => {
              return (
                <li key={date.data} className='date'>
                  <p>{date.diaDaSemana}</p>

                  <button
                    className={
                      date.disponivel
                        ? `date-button date-available ${
                            date.data === selectedDate && 'date-selected'
                          }`
                        : `date-button button-disabled ${
                            date.data === selectedDate && 'date-selected'
                          }`
                    }
                    onClick={() => handleSelectDate(date)}
                  >
                    {date.diaDoMes}
                  </button>
                </li>
              );
            })}
        </ul>
      </S.Dates>

      <S.ButtonWrapper>
        <Button onClick={goToConfirmation}>Próximo</Button>
      </S.ButtonWrapper>

      {error && (
        <S.Error>
          <p>Selecione uma data</p>
        </S.Error>
      )}
    </S.Wrapper>
  );
}
