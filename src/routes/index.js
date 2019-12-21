import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Routes';
import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/enrollments" exact component={Enrollments} isPrivate />
    </Switch>
  );
}
