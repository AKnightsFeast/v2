import React from 'react';

import { Header, Footer } from './';
import { ScrollToTop } from './scrolltotop';

//import jquery from 'jquery';

//let $ = jquery;
//let jQuery = jquery;

interface IProps {
    component: React.ComponentType<any>;
}

export const SiteWrapper = ({ component: Component, ...otherProps }: IProps) => {
    return (
        <>
            <Header />
            <main className="main">
                <Component {...otherProps} />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}