import * as S from "./styles";

type Local = {
  id: number;
  cidade: string;
  endereco: string;
};

type Schedule = {
  local: Local;
  data: string;
};

type NextScheduleProps = {
  schedule: Schedule;
};

export default function NextSchedule({ schedule }: NextScheduleProps) {
  const scheduleDate = new Date(schedule.data);

  return (
    <S.Wrapper>
      <S.Day>{scheduleDate.getDate()}</S.Day>

      <S.LocalWrapper>
        <p>{scheduleDate.toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}</p>
        <p>{schedule.local.cidade}</p>
        <p>{schedule.local.endereco}</p>
      </S.LocalWrapper>

      <S.Cancel>Cancelar</S.Cancel>
    </S.Wrapper>
  );
}
