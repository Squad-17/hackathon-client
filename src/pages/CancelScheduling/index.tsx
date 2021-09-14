import { useState } from 'react';
import { useHistory } from 'react-router';
import CancelSchedulingConfirmation from '../../components/CancelSchedulingConfirmation';
import CancelSchedulingSucceed from '../../components/CancelSchedulingSucceed';
import Container from '../../components/Container';
import Nav from '../../components/Nav';

import * as S from './styles';

export default function CancelScheduling({ ...props }) {
  const history = useHistory();
  const { state } = props.location;
  const [confirmedCancellation, setConfirmedCancellation] = useState(false);

  if (!state) history.push('/');

  return (
    <Container>
      <Nav />

      <S.Wrapper>
        {!confirmedCancellation ? (
          <CancelSchedulingConfirmation
            informations={state}
            setConfirmedCancellation={setConfirmedCancellation}
          />
        ) : (
          <CancelSchedulingSucceed />
        )}
      </S.Wrapper>
    </Container>
  );
}
