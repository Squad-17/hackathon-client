import Container from '../../components/Container';
import FormStepBar from '../../components/FormStepBar';
import { useAuth } from '../../hooks/auth';

export default function Scheduling() {
  const { name, signOut } = useAuth();

  return (
    <Container>
      <FormStepBar currentStep={3}/>
      <h1>Agendamento</h1>
      <h2>Olá, {name}</h2>

      <button onClick={signOut}>signOut</button>
    </Container>
  );
}
