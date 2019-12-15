import React, { useEffect } from 'react';
import { Route } from "react-router-dom";

import Header from './header';
import Footer from './footer';

import jquery from 'jquery';

let $ = jquery;
let jQuery = jquery;

interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}

const SiteWrapper = ({ component: Component, ...otherProps }: IProps) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/js/flatsome.js";
        script.async = true;
      
        document.body.appendChild(script);
    }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

    return (
        <div id="wrapper" aria-hidden="false">
            <Header />
            <main id="main" className="">
                <div id="content" role="main" className="content-area">
                    <Route render={otherProps => (
                        <Component {...otherProps} />
                    )} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SiteWrapper;