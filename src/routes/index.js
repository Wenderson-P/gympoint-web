import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Routes';
import SignIn from '~/pages/SignIn';
import Alunos from '~/pages/Alunos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/alunos" exact component={Alunos} isPrivate />
    </Switch>
  );
}
