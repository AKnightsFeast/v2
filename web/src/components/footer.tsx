import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="footer-wrapper">
            <div className="section-content relative">
                <div className="row row-large row-full-width align-middle row-padding">
                    <div className="col large-6 medium-12 small-12">
                        <div>Site Links</div>
                    </div>
                    <div className="col large-6 medium-12 small-12">
                        <div>Follow Me</div>
                        <div>Social Media Links</div>
                        <div className="row row-large row-full-width">
                            <div className="col large-12 medium-12 small-12">
                                <div>Contact Chef Laura</div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute-footer light medium-text-center text-center">
                <div className="container clearfix">
                    <div className="footer-primary pull-left">
                        <div className="copyright-footer">
                            <div className="gap-element clearfix" style={{display:"block", height:"auto", paddingTop:"15px"}}></div>Copyright 2019 © <strong>A Knight's Feast</strong>. All Rights Reserved.
                        </div>
                    </div>{/*<!-- .left -->*/}
                </div>{/*<!-- .container -->*/}
            </div>{/*<!-- .absolute-footer -->*/}
            <a href="#top" className="back-to-top button icon invert plain fixed bottom z-1 is-outline hide-for-medium circle" id="top-link"><i className="icon-angle-up"></i></a>

        {/*<!-- .footer-wrapper -->*/}
        </footer>
    );
}

export default Footer;