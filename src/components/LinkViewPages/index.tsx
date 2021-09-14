import { Link } from 'react-router-dom';
import * as S from './styles';

type LinkViewPagesProps = {
  name: string;
  to: string;
  externalLink?: boolean;
};

export default function LinkViewPages({
  name,
  to,
  externalLink = false,
  ...props
}: LinkViewPagesProps) {
  return (
    <S.Wrapper>
      {externalLink ? (
        <a href={to} {...props} target='_blank' rel='noreferrer'>
          {name}
        </a>
      ) : (
        <Link to={to} {...props}>
          {name}
        </Link>
      )}
    </S.Wrapper>
  );
}
