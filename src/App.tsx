import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Routes />
          <GlobalStyles />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
