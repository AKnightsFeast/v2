import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav className="nav">
                <div className="logo">
                    <NavLink to="/" title="A Knight's Feast - Personal Chef Service" rel="home">
                        <div className="img"></div>
                    </NavLink> 
                </div>

                <ul className="link-container">
                    {/* Menus Hoverable Link */}
                    <li className="link hoverable">
                        <span className="link-text">Menus</span>

                        <div className="mega-menu">
                            <div className="container">
                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <i className="mega-menu-icon material-icons">date_range</i>

                                        <h3 className="mega-menu-title">Monthly</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <i className="mega-menu-arr material-icons">play_circle_outline</i>

                                        <NavLink to="/menus/monthly" className="mega-menu-link">Look at the prior menus!</NavLink>
                                   </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <i className="mega-menu-icon material-icons">restaurant_menu</i>

                                        <h3 className="mega-menu-title">Personal</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <i className="mega-menu-arr material-icons">play_circle_outline</i>

                                        <NavLink to="/menus/personal" className="mega-menu-link">Click here to see more!</NavLink>
                                    </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                       <svg className="mega-menu-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                            <path d="M1.604 24c1.853-2.784 7.647-8.21 13.919-9.494l.525 3.276c-3.773.264-9.01 2.523-14.444 6.218zm-1.604-1c2.037-2.653 6.013-6.906 6.226-15.092l-3.271.561c.418 4.888-1.546 10.626-2.955 14.531zm20.827-11.423l.802 2.4 2.371.883-2.035 1.504-.107 2.528-2.06-1.471-2.437.68.763-2.413-1.4-2.109 2.531-.02 1.572-1.982zm-11.911 3.677h-.018c-.268 0-.49-.213-.499-.483-.098-2.877.511-4.87 3.798-5.24 1.953-.219 2.029-1.116 2.135-2.357.099-1.171.235-2.775 2.737-2.959 1.23-.09 1.908-.307 2.267-.725.407-.475.528-1.357.403-2.948-.022-.275.184-.516.459-.538.254-.019.516.184.537.46.151 1.906-.035 2.972-.64 3.678-.556.647-1.411.957-2.953 1.07-1.651.122-1.712.846-1.814 2.046-.106 1.247-.251 2.956-3.02 3.267-2.33.262-3.011 1.247-2.91 4.212.01.276-.207.507-.482.517zm12.084-9.254c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-13.715-4.058l-2.531.017-1.601-1.959-.766 2.412-2.359.918 2.058 1.473.144 2.527 2.037-1.501 2.447.643-.798-2.401 1.369-2.129zm3.715.058c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"/>
                                        </svg>

                                        <h3 className="mega-menu-title">Themed Events</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <i className="mega-menu-arr material-icons">play_circle_outline</i>

                                        <NavLink to="/menus/events" className="mega-menu-link">Look at these themes!</NavLink>
                                    </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <i className="mega-menu-icon material-icons">kitchen</i>

                                        <h3 className="mega-menu-title">Pack Your Freezer</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <i className="mega-menu-arr material-icons">play_circle_outline</i>

                                        <NavLink to="/menus/freezer" className="mega-menu-link">Savor these dishes!</NavLink>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* About Hoverable Link */}
                    <li className="link hoverable">
                        <span className="link-text">About</span>

                        <div className="mega-menu">
                            <div className="container">
                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <i className="mega-menu-icon material-icons">bookmark_border</i>

                                        <h3 className="mega-menu-title">Policies</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <i className="mega-menu-arr material-icons">play_circle_outline</i>

                                        <NavLink to="/policies" className="mega-menu-link">Take a look!</NavLink>
                                   </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <svg className="mega-menu-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                            <path d="M3.5 16.343l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm-.993-3.343h-.01c.022-4.906-2.246-2.772-2.246-6.676 0-1.507.983-2.324 2.248-2.324 1.869 0 3.169 1.787 1.399 5.129-.581 1.099.62 1.359 1.91 1.657 1.118.258 1.192.805 1.192 1.751v2.463h-4.493v-2zm-19.507 2v-2.463c0-.946.074-1.493 1.192-1.751 1.29-.298 2.491-.558 1.91-1.657-1.77-3.342-.47-5.129 1.399-5.129 1.265 0 2.248.817 2.248 2.324 0 3.904-2.268 1.77-2.246 6.676h.005v2h-4.508zm6 0v-2.623c0-1.258.1-1.985 1.588-2.329 1.684-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l.001 2.619h-12z"/>
                                        </svg>

                                        <h3 className="mega-menu-title">Testimonials</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <i className="mega-menu-arr material-icons">play_circle_outline</i>

                                        <NavLink to="/about/testimonials" className="mega-menu-link">See what they're saying!</NavLink>
                                    </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <i className="mega-menu-icon material-icons">emoji_people</i>

                                        <h3 className="mega-menu-title">Friends</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <i className="mega-menu-arr material-icons">play_circle_outline</i>

                                        <NavLink to="/about/friends" className="mega-menu-link">Check 'em out!</NavLink>
                                    </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <div className="mega-menu-icon cheflaura" title="Chef Laura"></div>

                                        <h3 className="mega-menu-title">Chef Laura</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <i className="mega-menu-arr material-icons">play_circle_outline</i>

                                        <NavLink to="/about/cheflaura" className="mega-menu-link">Meet Chef Laura!</NavLink>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Regular Link */}
                    <li className="link">
                        <span className="link-text">Login</span>
                    </li>

                    <li className="nav-right-item">
                        <div className="flex justify-between text-pink-600 fill-current">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M16 0v3h-8c-1.104 0-2 .896-2 2v17c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-22h-2zm-6 21h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm0-3h-8v-8h8v8z"/>
                            </svg>
                            <div className="pl-2">703.863.3068</div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;