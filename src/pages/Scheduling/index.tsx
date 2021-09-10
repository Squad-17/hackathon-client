import { useState } from 'react';

import Container from '../../components/Container';
import FirstStepScheduling from '../../components/FirstStepScheduling';
import FormStepBar from '../../components/FormStepBar';
import SchedulingConfirmation from '../../components/SchedulingConfirmation';

import * as S from './styles';

export type Informations = {
  data: string;
  localId: number;
  cidade: string;
  endereco: string;
  diaDaSemana: string;
  diaDoMes: number;
  disponivel: boolean;
};

export default function Scheduling() {
  const [currentStep, setCurrentStep] = useState(1);
  const [informations, setInformations] = useState<Informations>(
    {} as Informations
  );

  return (
    <Container>
      <S.Wrapper>
        <FormStepBar currentStep={currentStep} />

        <S.SchedulingWrapper>
          {currentStep === 1 && (
            <FirstStepScheduling
              setCurrentStep={setCurrentStep}
              setInformations={setInformations}
            />
          )}

          {currentStep === 2 && (
            <SchedulingConfirmation
              setCurrentStep={setCurrentStep}
              informations={informations}
            />
          )}
        </S.SchedulingWrapper>
      </S.Wrapper>
    </Container>
  );
}
