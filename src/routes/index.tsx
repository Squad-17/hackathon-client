import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Scheduling from '../pages/Scheduling';
import CancelScheduling from '../pages/CancelScheduling';
import PageNotFound from '../pages/404';

export default function Routes() {
  return (
    <Switch>
      <ProtectedRoute path='/' component={Home} exact />
      <Route path='/cadastrar' component={SignUp} exact />
      <Route path='/login' component={SignIn} exact />
      <ProtectedRoute path='/agendar' component={Scheduling} exact />
      <ProtectedRoute
        path='/cancelar-agendamento'
        component={CancelScheduling}
        exact
      />
      <Route path='*' component={PageNotFound} />
    </Switch>
  );
}
