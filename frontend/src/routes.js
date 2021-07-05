import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import ProfileTraveler from "./pages/Profile/ProfaileTraveler";
import ProfileUser from "./pages/Profile/ProfileUser";
import Incidents from "./pages/Incidents";
import UserRegister from "./pages/Register/UserRegister";
import TravelerRegister from "./pages/Register/TravelerRegister";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/userRegister" component={UserRegister} />
        <Route path="/travelerRegister" component={TravelerRegister} />

        <Route path="/traveler" component={ProfileTraveler} />
        <Route path="/user" component={ProfileUser} />

        <Route path="/incidents/new" component={Incidents} />
      </Switch>
    </BrowserRouter>
  );
}
