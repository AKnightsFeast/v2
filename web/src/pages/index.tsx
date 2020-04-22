//import * as React from "react";
//import { connect } from "react-redux";
import React, { useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { SiteWrapper } from "../components";

import Home from "./home";
import Assessment from "./assessment";
import About from "./about/cheflaura";
import Friends from "./about/friends";
import Policies from "./about/policies";
import Testimonials from "./about/testimonials";

import Monthly from "./menus/monthly/";

/*
import About from "../components/pages/About";
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
          <SiteWrapper path="/about/cheflaura" exact={true} component={About} />
          <SiteWrapper path="/about/policies" exact={true} component={Policies} />
          <SiteWrapper path="/about/testimonials" exact={true} component={Testimonials} />
          
          <SiteWrapper path="/menus/monthly" exact={true} component={Monthly} />

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