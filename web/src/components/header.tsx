import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header id="header" className="header header-full-width">
            <div className="header-wrapper">
                <div id="masthead" className="header-main hide-for-sticky">
                    <div className="header-inner flex-row container logo-left" role="navigation">

                        {/*<!-- Logo -->*/}
                        <div id="logo" className="flex-col logo">
                            {/*<!-- Header logo -->*/}
                            <a href="https://www.aknightsfeast.com/" title="A Knight's Feast - Personal Chef Service" rel="home">
                                <img src="img/logo.png" className="header_logo header-logo" alt="A Knight's Feast" width="401" height="95" />
                                <img src="img/logo.png" className="header-logo-dark" alt="A Knight's Feast" width="401" height="95" />
                            </a>
                        </div>

                        {/*<!-- Mobile Left Elements -->*/}
                        <div className="flex-col show-for-medium flex-left">
                            <ul className="mobile-nav nav nav-left"></ul>
                        </div>

                        {/*<!-- Left Elements -->*/}
                        <div className="flex-col hide-for-medium flex-left flex-grow">
                            <ul className="header-nav header-nav-main nav nav-left nav-uppercase"></ul>
                        </div>

                        {/*<!-- Right Elements -->*/}
                        <div className="flex-col hide-for-medium flex-right">
                            <ul className="header-nav header-nav-main nav nav-right nav-uppercase">
                                <li className="html custom html_topbar_right">
                                    <div className="header-button">
                                        <a href="https://www.californiachef.com/sign-up/" target="_self" className="button success is-large pink-bg">
                                            <span>Check me out on CozyMeal!</span>
                                        </a>
                                    </div>
                                </li>
                                {/*
                                <li className="header-divider"></li>
                                <li className="html header-social-icons ml-0">
                                    <div className="social-icons follow-icons">
                                        <a href="https://www.facebook.com/AKnightsFeast/" target="_blank" data-label="Facebook" rel="noopener noreferrer nofollow" className="icon plain facebook tooltip tooltipstered"><i className="icon-facebook"></i></a>
                                        <a href="https://www.instagram.com/CaliforniaChefServices" target="_blank" rel="noopener noreferrer nofollow" data-label="Instagram" className="icon plain  instagram tooltip tooltipstered"><i className="icon-instagram"></i></a>
                                        <a href="http://www.twitter.com/chefknight" target="_blank" data-label="Twitter" rel="noopener noreferrer nofollow" className="icon plain  twitter tooltip tooltipstered"><i className="icon-twitter"></i></a>
                                    </div>
                                </li>
                                <li className="html header-button-1">
                                    <div className="header-button">
                                        <a href="https://www.californiachef.com/sign-up/" className="button success">
                                            <span>Sign Up Now!</span>
                                        </a>
                                    </div>
                                </li>
                                */}
                            </ul>
                        </div>

                        {/*<!-- Mobile Right Elements -->*/}
                        <div className="flex-col show-for-medium flex-right">
                            <ul className="mobile-nav nav nav-right ">
                                <li className="nav-icon has-icon">
                                    <a href="#" data-open="#main-menu" data-pos="right" data-bg="main-menu-overlay" data-color="" className="is-small" aria-controls="main-menu" aria-expanded="false">
                                        <i className="icon-menu"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>{/*<!-- .header-inner -->*/}
                </div>

                {/*<!-- .header-main -->*/}
                <div id="wide-nav" className="header-bottom wide-nav hide-for-sticky nav-dark hide-for-medium">
                    <div className="flex-row container">

                        <div className="flex-col hide-for-medium flex-left">
                            <ul className="nav header-nav header-bottom-nav nav-left  nav-box nav-size-xlarge nav-spacing-xlarge nav-uppercase">
                                <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-49 has-dropdown">
                                    <a href="https://www.aknightsfeast.com/plans/" className="nav-top-link">Menus<i className="icon-angle-down"></i></a>
                                    <ul className="nav-dropdown nav-dropdown-simple dark dropdown-uppercase" style={{}}>
                                        <li id="menu-item-55" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55"><NavLink to="/menus/monthly">Monthly</NavLink></li>
                                        <li id="menu-item-54" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54"><NavLink to="/menus/personal">Personal</NavLink></li>
                                        <li id="menu-item-53" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53"><NavLink to="/menus/events">Themed Events</NavLink></li>
                                        <li id="menu-item-52" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52"><NavLink to="/menus/freezer">Pack Your Freezer</NavLink></li>
                                    </ul>
                                </li>
                                <li id="menu-item-65" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-65"><NavLink to="/policies" className="nav-top-link">Policies</NavLink></li>
                                <li id="menu-item-60" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-60"><a href="https://www.californiachef.com/testimonials/">Testimonials</a></li>
                                <li id="menu-item-61" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-61"><a href="https://www.californiachef.com/our-story/">About Chef Laura</a></li>
                            </ul>
                        </div>{/*<!-- flex-col -->*/}

                        <div className="flex-col hide-for-medium flex-right flex-grow">
                            <ul className="nav header-nav header-bottom-nav nav-right  nav-box nav-size-xlarge nav-spacing-xlarge nav-uppercase">
                                <li className="html custom html_topbar_left">
                                    {/*
                                    <h3 className="uppercase mb-0 text-white thin-font">Phone: <strong>(805) 669-9268</strong></h3>
                                    */}
                                    <a href="https://www.facebook.com/AKnightsFeast/" target="_blank" data-label="Facebook" rel="noopener noreferrer nofollow" className="icon button circle is-outline facebook tooltip tooltipstered"><i className="icon-facebook"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer nofollow" data-label="Instagram" className="icon button circle is-outline instagram tooltip tooltipstered"><i className="icon-instagram"></i></a>
                                    <a href="http://www.twitter.com/chefknight" target="_blank" data-label="Twitter" rel="noopener noreferrer nofollow" className="icon button circle is-outline  twitter tooltip tooltipstered"><i className="icon-twitter"></i></a>
                                </li>
                                <li className="header-divider"></li>
                                <li className="html header-button-1">
                                    <div className="header-button">
                                        <NavLink to="/assessment" className="button success pink-bg"><span>Send an assessment</span></NavLink>
                                    </div>
                                </li>
                                <li className="header-divider"></li>
                                <li className="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children">
                                    <a href="#" className="is-small"><i className="icon-search"></i></a>
                                    <ul className="nav-dropdown nav-dropdown-simple dark dropdown-uppercase">
                                        <li className="header-search-form search-form html relative has-icon">
                                            <div className="header-search-form-wrapper">
                                                <div className="searchform-wrapper ux-search-box relative is-normal">
                                                    <form method="get" className="searchform" action="https://www.californiachef.com/" role="search">
                                                        <div className="flex-row relative">
                                                            <div className="flex-col flex-grow">
                                                                <input type="search" className="search-field mb-0" name="s" id="s" placeholder="Search..." autoComplete="off" />
                                                            </div>{/*<!-- .flex-col -->*/}
                                                            <div className="flex-col">
                                                                <button type="submit" className="ux-search-submit submit-button secondary button icon mb-0">
                                                                    <i className="icon-search"></i>
                                                                </button>
                                                            </div>{/*<!-- .flex-col -->*/}
                                                        </div>{/*<!-- .flex-row -->*/}
                                                        <div className="live-search-results text-left z-top"><div className="autocomplete-suggestions" style={{position: 'absolute', display: 'none', maxHeight: '300px', zIndex: 9999}}></div></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>{/*<!-- .nav-dropdown -->*/}
                                </li>
                            </ul>
                        </div>{/*<!-- flex-col -->*/}


                    </div>{/*<!-- .flex-row -->*/}
                </div>{/*<!-- .header-bottom -->*/}

                <div className="header-bg-container fill"><div className="header-bg-image fill"></div><div className="header-bg-color fill"></div></div>{/*<!-- .header-bg-container -->*/}
            </div>{/*<!-- header-wrapper-->*/}
        </header>
    );
}

export default Header;