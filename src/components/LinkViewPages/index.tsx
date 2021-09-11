import * as S from './styles';

export default function LinkViewPages({...props}) {
    return <S.Wrapper {...props}>{props.name}</S.Wrapper>;
  }