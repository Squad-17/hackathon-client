import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children }: ButtonProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
