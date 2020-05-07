import React from 'react';
import { Route } from "react-router-dom";

import { Header, Footer } from './';
import { ScrollToTop } from './scrolltotop';

import jquery from 'jquery';

let $ = jquery;
let jQuery = jquery;

interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}

export const SiteWrapper = ({ component: Component, ...otherProps }: IProps) => {
    return (
        <>
            <Header />
            <main className="main">
                <Route render={otherProps => (<Component {...otherProps} />)} />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}