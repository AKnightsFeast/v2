import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="footer-wrapper">

            <hr />
            <div className="text-center hide-for-small">
                <img src="California%20Chef%20%20%20LA's%20Diet%20Meal%20Delivery%20Service_files/logo-new.jpg" alt="California Chef" width="300" height="71" />
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