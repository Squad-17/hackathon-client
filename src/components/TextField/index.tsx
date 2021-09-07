import { useState, InputHTMLAttributes, ChangeEvent } from 'react';

import * as S from './styles';

export type TextFieldProps = {
  label: string;
  type: string;
  name: string;
  error?: string;
  onInputChange: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  type,
  name,
  error,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setValue(newValue);

    onInputChange(newValue);
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>

      <S.Input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        {...props}
      />

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
