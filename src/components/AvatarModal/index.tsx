import * as S from "./style";

import { ReactComponent as avatar1 } from "../../assets/avatars/avatar1.svg";
import { ReactComponent as avatar2 } from "../../assets/avatars/avatar2.svg";
import { ReactComponent as avatar3 } from "../../assets/avatars/avatar3.svg";
import { ReactComponent as avatar4 } from "../../assets/avatars/avatar4.svg";
import { ReactComponent as avatar5 } from "../../assets/avatars/avatar5.svg";
import { ReactComponent as avatar6 } from "../../assets/avatars/avatar6.svg";
import { ReactComponent as avatar7 } from "../../assets/avatars/avatar7.svg";
import { ReactComponent as avatar8 } from "../../assets/avatars/avatar8.svg";
import { ReactComponent as avatar9 } from "../../assets/avatars/avatar9.svg";
import Button from "../Button";

export default function AvatarModal() {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];

  return (
    <S.Mask>
      <S.Wrapper>
        <ul className="avatars-list">
          {avatars.map((Avatar, index) => {
            return (
              <li key={index}>
                <Avatar />
              </li>
            );
          })}
        </ul>

        <S.ButtonWrapper>
          <Button className="outlined">Fechar</Button>
          <Button>Salvar</Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Mask>
  );
}
