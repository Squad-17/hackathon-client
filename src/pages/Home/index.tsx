import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Protocols from "../../components/Protocols";
import AvatarModal from "../../components/AvatarModal";
import NextSchedules from "../../components/NextSchedulesList";

import api from "../../services/api";
import * as S from "./styles";

import { useEffect, useState } from "react"; 
import ProfileCard from "../../components/ProfileCard";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);
  const [avatarModalActive, setAvatarModalActive] = useState(false);
  const [userInfo, setUserInfo] = useState({ nome: "", cargo: "", avatar: "" });

  function handleClick(index: number, target: string) {
    setPageIndex(index);

    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    api
      .get("funcionario/info")
      .then((data) => setUserInfo(data.data))
      .catch((error) => console.error(error));
  }, []);

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
          <ProfileCard userInfo={userInfo} avatarClick={() => setAvatarModalActive(true)}/>

          <NextSchedules />
        </S.GridWrapper>
      </S.Wrapper>

      <S.Wrapper id="protocols">
        <Protocols />
      </S.Wrapper>
    </Container>
  );
}
