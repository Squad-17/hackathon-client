import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}
