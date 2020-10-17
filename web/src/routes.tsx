import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Landing,
  OrphanagesMap,
  CreateOrphanage,
  OrphanageDetails,
} from "./views";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={OrphanageDetails} />
      </Switch>
    </BrowserRouter>
  );
};
