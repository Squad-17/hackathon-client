import { useEffect, useState } from 'react';

import api from '../../services/api';
import Button from '../Button';

import * as S from './styles';

type Local = {
  id: number;
  cidade: string;
  endereco: string;
};

type AvailableDates = {
  data: string;
  disponivel: string;
  diaDaSemana: string;
  diaDoMes: string;
};

export default function FirstStepScheduling() {
  const [locals, setLocals] = useState<Local[]>([] as Local[]);
  const [selectedLocal, setSelectedLocal] = useState(1);
  const [availableDates, setAvailableDates] = useState<AvailableDates[]>(
    {} as AvailableDates[]
  );
  const [selectedDate, setSelectedDate] = useState('');

  async function getAvailableDates(localId: number) {
    api
      .get(`agendamento/disponiveis/${localId}`)
      .then((data) => {
        setAvailableDates(data.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAvailableDates(selectedLocal);
  }, [selectedLocal]);

  useEffect(() => {
    async function getLocals() {
      api
        .get('local')
        .then((data) => {
          setLocals(data.data);
        })
        .catch((error) => console.log(error));
    }

    getLocals();
  }, []);

  async function handleScheduling() {
    if (!selectedLocal || !selectedDate) return;

    api
      .post('agendamento', { data: selectedDate, localId: selectedLocal })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <S.Wrapper>
      <S.Title>Agendamento</S.Title>

      <S.Locals>
        <h3>Sede</h3>

        {locals.length > 0 &&
          locals.map((local, index) => {
            return (
              <div key={local.id} className='local'>
                <div className='select-wrapper'>
                  <button
                    className={
                      selectedLocal === index + 1
                        ? 'button button-active'
                        : 'button'
                    }
                    onClick={() => setSelectedLocal(index + 1)}
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

        <div className='dates'>
          {availableDates.length > 0 &&
            availableDates.map((date) => {
              return (
                <div key={date.data} className='date'>
                  <p>{date.diaDaSemana}</p>
                  <button
                    className={
                      date.disponivel
                        ? 'date-button date-available'
                        : 'date-button'
                    }
                    onClick={() => setSelectedDate(date.data)}
                  >
                    {date.diaDoMes}
                  </button>
                </div>
              );
            })}
        </div>
      </S.Dates>

      <S.ButtonWrapper>
        <Button onClick={handleScheduling}>Próximo</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
