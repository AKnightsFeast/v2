import React, { useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { SiteWrapper } from "../components";

import { Home } from "./home";
import { Assessment } from "./assessment";

import { Monthly, Events, Freezer, Personal } from "./menus";
import { Friends, ChefLaura, Policies, Testimonials } from "./about";

/*
import LogIn from "../components/pages/LogIn";
import LogOut from "../components/pages/LogOut";
import Landing from "../components/pages/Landing";
import NotFound from "../components/pages/NotFound";
import Terms from "../components/pages/Terms";
import LoggedInRoute from "../routes/LoggedInRoute";

import LoggedOutRoute from "../routes/LoggedOutRoute";
*/

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useLayoutEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return null;
}

const Pages = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Switch>
          <SiteWrapper path="/" exact={true} component={Home} />
          <SiteWrapper path="/about/friends" exact={true} component={Friends} />
          <SiteWrapper path="/about/policies" exact={true} component={Policies} />
          <SiteWrapper path="/about/cheflaura" exact={true} component={ChefLaura} />
          <SiteWrapper path="/about/testimonials" exact={true} component={Testimonials} />
          
          <SiteWrapper path="/menus/events" exact={true} component={Events} />
          <SiteWrapper path="/menus/freezer" exact={true} component={Freezer} />
          <SiteWrapper path="/menus/monthly" exact={true} component={Monthly} />
          <SiteWrapper path="/menus/personal" exact={true} component={Personal} />

          <Route path="/assessment" exact={true} component={Assessment} />
          {/*
              <LoggedOutRoute path="/" exact={true} component={Landing} />
              <LoggedOutRoute path="/about" exact={true} component={About} />
              <LoggedOutRoute path="/log-in" exact={true} component={LogIn} />
              <LoggedInRoute path="/log-out" exact={true} component={LogOut} />
          */}
      </Switch>
    </>
  );
};

export default Pages;