import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { SiteWrapper } from "../components";

import { Home } from "./home";
import { AssessmentWizard as Assessment } from "./assessment";

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

const Pages: React.FC = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<SiteWrapper component={Home} />} />
        <Route path="/about/friends" element={<SiteWrapper component={Friends} />} />
        <Route path="/about/policies" element={<SiteWrapper component={Policies} />} />
        <Route path="/about/cheflaura" element={<SiteWrapper component={ChefLaura} />} />
        <Route path="/about/testimonials" element={<SiteWrapper component={Testimonials} />} />

        <Route path="/menus/events" element={<SiteWrapper component={Events} />} />
        <Route path="/menus/freezer" element={<SiteWrapper component={Freezer} />} />
        <Route path="/menus/monthly" element={<SiteWrapper component={Monthly} />} />
        <Route path="/menus/personal" element={<SiteWrapper component={Personal} />} />

        <Route path="/assessment" element={<Assessment />} />
        {/*
            <LoggedOutRoute path="/" exact={true} component={Landing} />
            <LoggedOutRoute path="/about" exact={true} component={About} />
            <LoggedOutRoute path="/log-in" exact={true} component={LogIn} />
            <LoggedInRoute path="/log-out" exact={true} component={LogOut} />
        */}
      </Routes>
    </>
  );
};

export default Pages;