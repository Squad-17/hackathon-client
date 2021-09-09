import * as S from './styles';

type FormStepBarProps = {
    currentStep: number;
}

export default function FormStepBar({currentStep}: FormStepBarProps) {    
    return (        
        <S.Wrapper>
            <S.Step className={currentStep === 1 ? "active" : ""} />
            <S.Connector />
            <S.Step className={currentStep === 2 ? "active" : ""} />
            <S.Connector />
            <S.Step className={currentStep === 3 ? "active" : ""} />            
        </S.Wrapper>
    )
}