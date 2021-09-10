import Nav from "../../components/Nav";
import Container from "../../components/Container";
import NextSchedules from "../../components/NextSchedulesList";

import * as S from "./styles";
import { Link } from "react-router-dom";
import { ReactComponent as Avatar } from "../../assets/guy-1.svg";

export default function Home() {
  return (
    <Container>
      <S.Wrapper>
        <Nav />

        <S.Title>Dashboard</S.Title>

        <S.GridWrapper>
          <S.ProfileWrapper>
            <Avatar className="profile-avatar" />

            <S.ProfileTag className="blue"> #ProudToBeOrange</S.ProfileTag>
            <S.ProfileTag className="orange">Henrique Lopes</S.ProfileTag>
            <S.ProfileTag className="orange">Dev. Front-End</S.ProfileTag>
          </S.ProfileWrapper>

          <NextSchedules />
        </S.GridWrapper>

        <Link to="/agendar" className="link-agendar">Agendar</Link>
      </S.Wrapper>
    </Container>
  );
}
