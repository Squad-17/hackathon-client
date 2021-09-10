import { useEffect, useState } from "react";
import api from "../../services/api";
import NextSchedule from "../NextSchedule";

import * as S from "./styles";

export default function NextSchedules() {
  const [schedules, setSchedules] = useState([]);

  async function getSchedules() {
    api
      .get("agendamento")
      .then((data) => {
        setSchedules(data.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <S.Wrapper>
      <S.Title>Próximos agendamentos</S.Title>

      {schedules.length > 0 &&
        schedules.map((schedule, index) => {
          return <NextSchedule schedule={schedule} key={index} />;
        })}
    </S.Wrapper>
  );
}
