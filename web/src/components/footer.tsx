import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="footer-wrapper">
            <div className="section-content relative">
                <div className="row row-large row-full-width align-middle row-padding">
                    <div className="col large-6 medium-12 small-12">
                        <h4 className="footer-nav-title">Contact Chef Laura</h4>
                        <form>
                            <input name="name" type="text" placeholder="Name" required={true} className="contact" />
                            <input name="email" type="email" placeholder="Email" required={true} className="contact" />
                            <textarea name="message" placeholder="Message..." required={true} className="contact"></textarea>
                            <div className="footer-button">
                                <a className="button success pink-bg">
                                    <span>Send</span>
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="col large-4 medium-12 small-12">
                        <h4 className="footer-nav-title">Site Links</h4>
                        <div>
                            <ul>
                                <li>
                                    <div>Menus</div>
                                    <ul>
                                        <li><NavLink to="/menus/monthly" className="is-underline">Monthly</NavLink></li>
                                        <li><NavLink to="/menus/personal" className="is-underline">Personal</NavLink></li>
                                        <li><NavLink to="/menus/events" className="is-underline">Themed Events</NavLink></li>
                                        <li><NavLink to="/menus/freezer" className="is-underline">Pack Your Freezer</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/policies" className="is-underline">Policies</NavLink></li>
                                <li><NavLink to="/testimonials" className="is-underline">Testimonials</NavLink></li>
                                <li><NavLink to="/about" className="is-underline">About Chef Laura</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col large-2 medium-12 small-12">
                        <h4 className="footer-nav-title">Follow Me</h4>
                        <div>
                            <a href="https://www.facebook.com/AKnightsFeast/" target="_blank" data-label="Facebook" rel="noopener noreferrer nofollow" className="icon plain facebook tooltip tooltipstered"><i className="icon-facebook"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer nofollow" data-label="Instagram" className="icon plain  instagram tooltip tooltipstered"><i className="icon-instagram"></i></a>
                            <a href="http://www.twitter.com/chefknight" target="_blank" data-label="Twitter" rel="noopener noreferrer nofollow" className="icon plain  twitter tooltip tooltipstered"><i className="icon-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row row-large row-full-width align-middle row-padding">
                    <div className="col large-12 medium-12 small-12 medium-text-center text-center">
                        <div className="copyright-footer">
                            <div className="gap-element clearfix" style={{display:"block", height:"auto", paddingTop:"15px"}}></div>Copyright 2019 © <strong>A Knight's Feast</strong>. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>

            <a href="#top" className="back-to-top button icon invert plain fixed bottom z-1 is-outline hide-for-medium circle" id="top-link"><i className="icon-angle-up"></i></a>

        {/*<!-- .footer-wrapper -->*/}
        </footer>
    );
}

export default Footer;