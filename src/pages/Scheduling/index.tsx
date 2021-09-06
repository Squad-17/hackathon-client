import { useAuth } from '../../hooks/auth';

export default function Scheduling() {
  const { name, signOut } = useAuth();

  return (
    <div>
      <h1>Agendamento</h1>
      <h2>Olá, {name}</h2>

      <button onClick={signOut}>signOut</button>
    </div>
  );
}
