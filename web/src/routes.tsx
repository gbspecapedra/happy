import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Landing } from "./view/Landing";
import { OrphanagesMap } from "./view/OrphanagesMap";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
};
