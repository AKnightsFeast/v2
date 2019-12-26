import React from 'react';
import { Route } from "react-router-dom";

import Header from './header';
import Footer from './footer';

import jquery from 'jquery';

import '../styles/main.css';

let $ = jquery;
let jQuery = jquery;

interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}

const SiteWrapper = ({ component: Component, ...otherProps }: IProps) => {
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