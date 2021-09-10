import Container from '../../components/Container';
import FirstStepScheduling from '../../components/FirstStepScheduling';
import FormStepBar from '../../components/FormStepBar';

import * as S from './styles';

export default function Scheduling() {
  return (
    <Container>
      <S.Wrapper>
        <FormStepBar currentStep={1} />

        <S.SchedulingWrapper>
          <FirstStepScheduling />
        </S.SchedulingWrapper>
      </S.Wrapper>
    </Container>
  );
}
