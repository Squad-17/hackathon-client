import * as S from "./style";

import api from "../../services/api";
import Button from "../Button";

import avatar1 from "../../assets/avatars/avatar1.svg";
import avatar2 from "../../assets/avatars/avatar2.svg";
import avatar3 from "../../assets/avatars/avatar3.svg";
import avatar4 from "../../assets/avatars/avatar4.svg";
import avatar5 from "../../assets/avatars/avatar5.svg";
import avatar6 from "../../assets/avatars/avatar6.svg";
import avatar7 from "../../assets/avatars/avatar7.svg";
import avatar8 from "../../assets/avatars/avatar8.svg";
import avatar9 from "../../assets/avatars/avatar9.svg";
import { useState } from "react";

type AvatarModalProps = {
  active: boolean;
  userAvatar: number;
  onClose: () => void;
  onSave: () => void;
};

export default function AvatarModal({ active, userAvatar, onClose, onSave }: AvatarModalProps) {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];
  const [selectedAvatar, setSelectedAvatar] = useState("avatar" + userAvatar);

  async function saveAvatar() {
    api
      .patch(`funcionario/avatar?avatar=${selectedAvatar}`)
      .then(() => {
        onSave();
      })
      .catch((error) => console.log(error));
  }

  return (
    <S.Mask className={active ? "active" : ""}>
      <S.Wrapper>
        <ul className="avatars-list">        

          {avatars.map((avatar, index) => {
            return (
              <li key={index}>
                <img
                  src={avatar}
                  className={Number(selectedAvatar.slice(-1)) === index + 1 ? "selected" : ""}
                  onClick={() => setSelectedAvatar("avatar" + (index + 1))}
                  alt=""
                />
              </li>
            );
          })}
        </ul>

        <S.ButtonWrapper>
          <Button className="outlined" onClick={onClose}>
            Fechar
          </Button>
          <Button onClick={saveAvatar}>Salvar</Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Mask>
  );
}
