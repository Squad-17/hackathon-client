import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Protocols from "../../components/Protocols";
import NextSchedules from "../../components/NextSchedulesList";

import * as S from "./styles";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Avatar } from "../../assets/guy-1.svg";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);

  function handleClick(index: number, target: string) {
    setPageIndex(index);

    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Container className="max-height">
      <S.PageScrollCircleList>
        <S.PageScrollCircle className={pageIndex === 1 ? "active" : ""} onClick={() => handleClick(1, "dashboard")} />
        <S.PageScrollCircle className={pageIndex === 2 ? "active" : ""} onClick={() => handleClick(2, "protocols")} />
      </S.PageScrollCircleList>

      <S.Wrapper id="dashboard">
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

        <Link to="/agendar" className="link-agendar">
          Agendar
        </Link>
      </S.Wrapper>

      <S.Wrapper id="protocols">
        <Protocols />
      </S.Wrapper>
    </Container>
  );
}
