import { useHistory } from 'react-router';
import CancelSchedulingConfirmation from '../../components/CancelSchedulingConfirmation';
import CancelSchedulingSucceed from '../../components/CancelSchedulingSucceed';
import Container from '../../components/Container';
import Nav from '../../components/Nav';

import * as S from './styles';

export default function CancelScheduling({ ...props }) {
  const history = useHistory();
  const { state } = props.location;

  if (!state) history.push('/');

  return (
    <Container>
      <Nav />

      <S.Wrapper>
        <CancelSchedulingConfirmation />
      </S.Wrapper>
    </Container>
  );
}
