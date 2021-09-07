import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Scheduling from '../pages/Scheduling';
import PageNotFound from '../pages/404';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastrar' component={SignUp} exact />
      <Route path='/login' component={SignIn} exact />
      <ProtectedRoute path='/agendar' component={Scheduling} exact />
      <Route path='*' component={PageNotFound} />
    </Switch>
  );
}