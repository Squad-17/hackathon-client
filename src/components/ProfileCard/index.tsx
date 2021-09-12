import * as S from "./style";

import avatar from '../../assets/avatars/avatar6.svg';

type UserInfo = {
  avatar: string;
  nome: string;
  cargo: string;
};

type ProfileCardProps = {
  userInfo: UserInfo;
  avatarClick: () => void;
};

export default function ProfileCard({ userInfo, avatarClick }: ProfileCardProps) {  

  return (
    <S.ProfileWrapper>
      {userInfo.avatar && <img src={avatar} className="profile-avatar" onClick={avatarClick} alt="" />}

      <S.ProfileTag className="blue"> #ProudToBeOrange</S.ProfileTag>
      <S.ProfileTag className="orange">{userInfo.nome}</S.ProfileTag>

      {userInfo.cargo && <S.ProfileTag className="orange">{userInfo.cargo}</S.ProfileTag>}
    </S.ProfileWrapper>
  );
}
