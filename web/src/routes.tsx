import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Landing,
  OrphanagesMap,
  CreateOrphanage,
  OrphanageDetails,
  SignIn,
  SignUp,
  Dashboard,
  ForgetPassword,
  NewPassword,
} from "./views";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route path="/redefine" exact component={ForgetPassword} />
        <Route path="/redefine/newpassword/:email" component={NewPassword} />

        <Route path="/users/:id" component={Dashboard} />

        <Route path="/map" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={OrphanageDetails} />
      </Switch>
    </BrowserRouter>
  );
};
