import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes />
        <GlobalStyles />
      </AuthProvider>
    </Router>
  );
}

export default App;
