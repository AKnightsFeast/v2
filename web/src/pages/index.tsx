import * as React from "react";
//import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import SiteWrapper from "../components/sitewrapper";

import Home from "./home";
import Assessment from "./assessment";
import Testimonials from "./testimonials";

/*
import About from "../components/pages/About";
import LogIn from "../components/pages/LogIn";
import LogOut from "../components/pages/LogOut";
import Landing from "../components/pages/Landing";
import NotFound from "../components/pages/NotFound";
import Terms from "../components/pages/Terms";import LoggedInRoute from "../routes/LoggedInRoute";

import LoggedOutRoute from "../routes/LoggedOutRoute";
*/

const Pages = () => {
  return (
    <Switch>
        <SiteWrapper path="/" exact={true} component={Home} />
        <SiteWrapper path="/testimonials" exact={true} component={Testimonials} />
        <Route path="/assessment" exact={true} component={Assessment} />
        {/*
            <LoggedOutRoute path="/" exact={true} component={Landing} />
            <LoggedOutRoute path="/about" exact={true} component={About} />
            <LoggedOutRoute path="/log-in" exact={true} component={LogIn} />
            <LoggedInRoute path="/log-out" exact={true} component={LogOut} />
        */}
    </Switch>
  );
};

export default Pages;