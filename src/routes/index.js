import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Routes';
import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import StudentForm from '~/pages/Students/StudentForm';
import Plans from '~/pages/Plans';
import PlanForm from '~/pages/Plans/PlanForm';
import Enrollments from '~/pages/Enrollments';
import EnrollmentForm from '~/pages/Enrollments/EnrollmentForm';

import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/form" component={StudentForm} isPrivate />
      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/plans/form" exact component={PlanForm} isPrivate />
      <Route path="/enrollments" exact component={Enrollments} isPrivate />
      <Route
        path="/enrollments/form"
        exact
        component={EnrollmentForm}
        isPrivate
      />
      <Route path="/help-orders" exact component={HelpOrders} isPrivate />
      <Route path="/help-orders" exact component={HelpOrders} isPrivate />
    </Switch>
  );
}
