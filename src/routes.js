import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Agendador from './pages/Agendador';
import Cadastro from './pages/Cadastro'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/agendador" component={Agendador} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;