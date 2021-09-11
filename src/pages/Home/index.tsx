import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Protocols from "../../components/Protocols";
import NextSchedules from "../../components/NextSchedulesList";

import * as S from "./styles";

import { useState } from "react";
import { ReactComponent as Avatar } from "../../assets/avatars/avatar1.svg";
import AvatarModal from "../../components/AvatarModal";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);
  const [avatarModalActive, setAvatarModalActive] = useState(false);

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

      <AvatarModal active={avatarModalActive} userAvatar="avatar8" onClose={() => setAvatarModalActive(false)} />

      <S.Wrapper id="dashboard">
        <Nav />

        <S.Title>Dashboard</S.Title>

        <S.GridWrapper>
          <S.ProfileWrapper>
            <Avatar className="profile-avatar" onClick={() => setAvatarModalActive(true)} />

            <S.ProfileTag className="blue"> #ProudToBeOrange</S.ProfileTag>
            <S.ProfileTag className="orange">Henrique Lopes</S.ProfileTag>
            <S.ProfileTag className="orange">Dev. Front-End</S.ProfileTag>
          </S.ProfileWrapper>

          <NextSchedules />
        </S.GridWrapper>
      </S.Wrapper>

      <S.Wrapper id="protocols">
        <Protocols />
      </S.Wrapper>
    </Container>
  );
}
