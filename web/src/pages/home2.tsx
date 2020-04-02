import React from 'react';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-parallax';
//import { Transition } from 'react-transition-group';

import "../assets/styles/transition.css";
import "../assets/styles/navbar.css";
import "../assets/styles/site.css";

const calc = (o: number) => `translateY(${o * 0.1}px)`;

const Home: React.FC = () => {
    //const [showNav, setShowNav] = useState(false);

    return (
        <>
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
                                        <svg className="mega-menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M17 1c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-12 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm13 5v10h-16v-10h16zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-8v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-2v18h20v-18zm4 3v19h-22v-2h20v-17h2zm-17 7h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                                        </svg>

                                        <h3 className="mega-menu-title">Monthly</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <svg className="mega-menu-arr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                        </svg>

                                        <NavLink to="/menus/monthly" className="mega-menu-link">Look at the prior menus!</NavLink>
                                   </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                       <svg className="mega-menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
                                            <path d="M18.496 24h-.001c-.715 0-1.5-.569-1.5-1.5v-8.5s-1.172-.003-2.467 0c.802-6.996 3.103-14 4.66-14 .447 0 .804.357.807.851.01 1.395.003 16.612.001 21.649 0 .828-.672 1.5-1.5 1.5zm-11.505-12.449c0-.691-.433-.917-1.377-1.673-.697-.56-1.177-1.433-1.088-2.322.252-2.537.862-7.575.862-7.575h.6v6h1.003l.223-6h.607l.173 6h1.003l.242-6h.562l.199 6h1.003v-6h.549s.674 5.005.951 7.55c.098.902-.409 1.792-1.122 2.356-.949.751-1.381.967-1.381 1.669v10.925c0 .828-.673 1.5-1.505 1.5-.831 0-1.504-.672-1.504-1.5v-10.93z"/>
                                        </svg>

                                        <h3 className="mega-menu-title">Personal</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <svg className="mega-menu-arr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                        </svg>

                                        <NavLink to="/menus/personal" className="mega-menu-link">Click here to see more!</NavLink>
                                    </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                       <svg className="mega-menu-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                            <path d="M1.604 24c1.853-2.784 7.647-8.21 13.919-9.494l.525 3.276c-3.773.264-9.01 2.523-14.444 6.218zm-1.604-1c2.037-2.653 6.013-6.906 6.226-15.092l-3.271.561c.418 4.888-1.546 10.626-2.955 14.531zm20.827-11.423l.802 2.4 2.371.883-2.035 1.504-.107 2.528-2.06-1.471-2.437.68.763-2.413-1.4-2.109 2.531-.02 1.572-1.982zm-11.911 3.677h-.018c-.268 0-.49-.213-.499-.483-.098-2.877.511-4.87 3.798-5.24 1.953-.219 2.029-1.116 2.135-2.357.099-1.171.235-2.775 2.737-2.959 1.23-.09 1.908-.307 2.267-.725.407-.475.528-1.357.403-2.948-.022-.275.184-.516.459-.538.254-.019.516.184.537.46.151 1.906-.035 2.972-.64 3.678-.556.647-1.411.957-2.953 1.07-1.651.122-1.712.846-1.814 2.046-.106 1.247-.251 2.956-3.02 3.267-2.33.262-3.011 1.247-2.91 4.212.01.276-.207.507-.482.517zm12.084-9.254c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-13.715-4.058l-2.531.017-1.601-1.959-.766 2.412-2.359.918 2.058 1.473.144 2.527 2.037-1.501 2.447.643-.798-2.401 1.369-2.129zm3.715.058c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"/>
                                        </svg>

                                        <h3 className="mega-menu-title">Themed Events</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <svg className="mega-menu-arr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                        </svg>

                                        <NavLink to="/menus/events" className="mega-menu-link">Look at these themed menus!</NavLink>
                                    </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <svg className="mega-menu-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="24px" y="24px" viewBox="0 0 488.8 488.8">
                                            <path d="M168,127.6c5.2,0,9.2-4,9.2-9.2V79.2c0-5.2-4-9.2-9.2-9.2c-5.2,0-9.2,4-9.2,9.2v39.2C158.8,123.6,162.8,127.6,168,127.6z"/>
                                            <path d="M168,189.6c-5.2,0-9.2,4-9.2,9.2V238c0,5.2,4,9.2,9.2,9.2c5.2,0,9.2-4,9.2-9.2v-39.2C177.2,193.6,173.2,189.6,168,189.6z"/>
                                            <path d="M110.4,0v456h28.4v12.8c0,10.8,8.8,19.6,19.6,19.6s19.6-8.8,19.6-19.6V456h132.4v12.8c0.4,11.2,9.2,20,20,20S350,480,350,
                                                    469.2v-12.8h28.4V0H110.4z M165.6,469.2c0,4-3.2,7.2-7.2,7.2s-7.2-3.2-7.2-7.2v-12.8h14.4V469.2z M337.6,469.2c0,4-3.2,
                                                    7.2-7.2,7.2s-7.2-3.2-7.2-7.2v-12.8h14.4V469.2z M366,444H122.8v-6.8H366V444z M122.8,424.8V165.6H366v259.2H122.8zM366,
                                                    153.2H122.8V12.4H366V153.2z"/>
                                        </svg>

                                        <h3 className="mega-menu-title">Pack Your Freezer</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <svg className="mega-menu-arr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                        </svg>

                                        <NavLink to="/menus/freezer" className="mega-menu-link">Savor these yummy dishes!</NavLink>
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
                                        <svg className="mega-menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-5v-1h5v1zm5-4h-10v1h10v-1zm0-3h-10v1h10v-1zm2-7h-19v19h-2v-21h21v2z"/>
                                        </svg>

                                        <h3 className="mega-menu-title">Policies</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <svg className="mega-menu-arr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                        </svg>

                                        <NavLink to="/policies" className="mega-menu-link">Take a look!</NavLink>
                                   </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <svg className="mega-menu-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                            <path d="M3.5 16.343l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm-.993-3.343h-.01c.022-4.906-2.246-2.772-2.246-6.676 0-1.507.983-2.324 2.248-2.324 1.869 0 3.169 1.787 1.399 5.129-.581 1.099.62 1.359 1.91 1.657 1.118.258 1.192.805 1.192 1.751v2.463h-4.493v-2zm-19.507 2v-2.463c0-.946.074-1.493 1.192-1.751 1.29-.298 2.491-.558 1.91-1.657-1.77-3.342-.47-5.129 1.399-5.129 1.265 0 2.248.817 2.248 2.324 0 3.904-2.268 1.77-2.246 6.676h.005v2h-4.508zm6 0v-2.623c0-1.258.1-1.985 1.588-2.329 1.684-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l.001 2.619h-12z"/>
                                        </svg>

                                        <h3 className="mega-menu-title">Testimonials</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <svg className="mega-menu-arr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                        </svg>

                                        <NavLink to="/testimonials" className="mega-menu-link">See what they're saying!</NavLink>
                                    </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <svg className="mega-menu-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                            <path d="M1.981 8.444h20.038c.398 0 .747.264.856.648l1.105 3.904.02.139c0 .209-.127.402-.33.48l-.001.001c-.24.092-.511-.005-.635-.231l-1.144-2.071-.328 7.967c-.017.403-.347.719-.749.719h-.001c-.393 0-.716-.306-.746-.698-.068-.865-.249-2.933-.304-3.752-.022-.34-.271-.54-.541-.54-.242 0-.514.2-.537.54-.055.819-.236 2.887-.304 3.752-.03.392-.352.698-.746.698h-.001c-.402 0-.732-.316-.749-.719-.086-2.08-.435-8.736-.435-8.736h-1.669s-.349 6.656-.435 8.736c-.017.402-.347.719-.749.719h-.001c-.394 0-.716-.306-.746-.698-.068-.865-.249-2.933-.304-3.752-.023-.34-.295-.54-.537-.54h-.004c-.242 0-.515.2-.537.54-.055.819-.236 2.887-.304 3.752-.03.392-.353.698-.746.698h-.001c-.402 0-.732-.316-.749-.719-.086-2.08-.435-8.736-.435-8.736h-1.681s-.349 6.656-.435 8.736c-.017.403-.347.719-.749.719h-.001c-.394 0-.716-.306-.746-.698-.068-.865-.249-2.933-.304-3.752-.023-.34-.295-.54-.537-.54-.27 0-.519.2-.541.54-.055.819-.236 2.887-.304 3.752-.03.392-.353.698-.746.698h-.001c-.402 0-.732-.316-.749-.719l-.328-7.967-1.144 2.071c-.124.226-.395.323-.635.231l-.001-.001c-.203-.078-.33-.271-.33-.48l.02-.139 1.105-3.904c.109-.384.458-.648.856-.648zm3.019-4.444c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm14 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-6.994 0c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"/>
                                        </svg>

                                        <h3 className="mega-menu-title">Friends</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <svg className="mega-menu-arr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                        </svg>

                                        <NavLink to="/about/friends" className="mega-menu-link">Check 'em out!</NavLink>
                                    </div>
                                </ul>

                                <ul className="mega-menu-item">
                                    <div className="flex items-center">
                                        <img src="/img/cheflaura.jpg" className="mega-menu-icon" />

                                        <h3 className="mega-menu-title">Chef Laura</h3>
                                    </div>

                                    <p className="mega-menu-desc">
                                        This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.
                                    </p>

                                    <div className="flex items-center py-3">
                                        <svg className="mega-menu-arr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                        </svg>

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
                </ul>
            </nav>



            <section className="hero">
                <div className="hero-content">
                    <h2>Question?</h2>
                    <p className="mb-6">
                        Have you and your family become too reliant on carryout meals, mass-produced restaurant food, or boxed 
                        dinners with minimal nutritional value? Do you want to eat healthier but lack the time to plan, shop for 
                        and cook meals that are good for you?
                    </p>
                    <h2>Answer!</h2>
                    <p>
                        A Knight's Feast Personal Chef Service prepares your choice of meals - 
                        made fresh in your own kitchen - and packages them with easy-to-follow heating instructions. 
                        We create meals that meet your specific dietary and nutritional needs and appeal to your personal tastes.
                    </p>
                </div>
{/*
                <div className="">
                <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" fill="currentColor" />
                <defs>
                <pattern id="bg-svg" x="0" y="0">
                                <image className="bg-hero" />
                            </pattern>
                            </defs>
                            </svg>
                            </div>
*/}
                <div className="hero-bg"></div>
            </section>



            <div className="foodquote">
                <div className="overlay"></div>
                <Parallax className="parallax" bgImage="/img/bgfishstew.jpg" strength={700}>
                    <blockquote>
                        One cannot think well, love well, sleep well, if one has not dined well.
                        <span>Virginia Woolf</span>
                    </blockquote>
                </Parallax>
            </div>



            <section className="section dark" id="mainHow">
                <div className="bg section-bg fill bg-fill bg-loaded"></div>{/*<!-- .section-bg -->*/}

                <div className="section-content relative">
                    <div className="container section-title-container">
                        <h2 className="section-title section-title-center"><b></b><span className="section-title-main" style={{ fontSize:"120%" }}>How It Works</span><b></b></h2>
                    </div>{/*<!-- how title -->*/}

                    <div className="timeline">

                        <div className="timeline-item">
                            <div className="timeline-icon"><i className="material-icons" style={{ width: "24", height: "24 "}}>question_answer</i></div>
                            <div className="timeline-content">
                                <h2>1. Chat</h2>
                                <div className="timeline-content-container left">
                                    <div style={{ textAlign: "left" }}>
                                        <p>First I meet with you to discuss your dining wants and needs.</p>
                                        <ul style={{ padding: "1.3em 0px 0px 1.3em" }}>
                                            <li>What are your favorite foods, flavors, and textures?</li>
                                            <li>Do you have a family favorite that you just don’t have time to prepare?</li>
                                            <li>Do you want to follow a diet plan?</li>
                                            <li>Do you have any allergies or foods you don’t like?</li>
                                            <li>What international foods do you enjoy?</li>
                                        </ul>
                                        <p>
                                            You can also complete a <NavLink to="/Assessment" className="is-underline">Client Assessment Form</NavLink> online so I can come up with a menu for you quicker!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon"><i className="material-icons" style={{ width: "24", height: "24 "}}>create</i></div>
                            <div className="timeline-content right">
                                <h2>2. Design</h2>
                                <div className="timeline-content-container right">
                                    <p className="justify normal">Your menu is designed and sent to you for approval.</p>
                                    <p className="justify normal">
                                        A list of suggestions will be sent you.  It must be approved within 48 hours of your cook date.  Feel free to make suggestions of what you’re craving!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon"><i className="material-icons" style={{ width: "24", height: "24 "}}>shopping_cart</i></div>
                            <div className="timeline-content">
                                <h2>3. Shop</h2>
                                <div className="timeline-content-container left">
                                    <p className="justify normal">Your food is purchased fresh the day of your cook date.</p>
                                    <p className="justify normal">
                                        Chef Laura will shop at the best local grocery stores and local farmers’ markets to ensure your meals are produced from the absolute freshest ingredients.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon"><i className="material-icons" style={{ width: "24", height: "24 "}}>whatshot</i></div>
                            <div className="timeline-content right">
                            <h2>4. Cook</h2>
                            <div className="timeline-content-container right">
                                <p className="justify normal">Your food will be prepared fresh by Chef Laura for delivery to your home.</p>
                            </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon"><i className="material-icons" style={{ width: "24", height: "24 "}}>kitchen</i></div>
                            <div className="timeline-content">
                            <h2>5. Pack</h2>
                            <div className="timeline-content-container left">
                                <p className="justify normal">
                                    All meals will be packaged with instructions on how to serve. Your kitchen will be clean of all evidence of your chef being there — all except for the pleasant smell of fresh food.
                                </p>
                                <p className="justify normal">
                                    I want this to be a food delivery service for the whole family where meals can be individually packed, family style, or a mix of the two.
                                </p>
                            </div>
                            </div>
                        </div>

                    </div>{/*<!-- how timeline -->*/}
                </div>{/* <!-- how section --> */}
            </section>



            <div className="chefquote">
                <div className="overlay"></div>
                <Parallax className="parallax" bgImage="/img/bgsangria.jpg" strength={-100}>
                    <blockquote>
                        A personal chef service is for anyone looking for a few nights off from worrying about what's for dinner.
                        <span>Chef Laura</span>
                     </blockquote>
                </Parallax>
            </div>



            <section className="section" id="mainPrices">
                <div className="section-content relative">
                    <div className="container section-title-container">
                        <h2 className="section-title section-title-center"><b></b><span className="section-title-main" style={{ fontSize:"120%" }}>Prices</span><b></b></h2>
                    </div>{/*<!-- prices title -->*/}

                    <div id="prices">
                        <div className="plan">
                            <div className="plan-inner">
                                <div className="entry-title">
                                    <h3>Meal Service</h3>
                                    <div className="price">$475</div>
                                </div>
                                <div className="entry-content">
                                    <ul>
                                        <li>
                                            <p>Five meals with up to 4-6 servings of any selection.</p>
                                            <p>Fee includes groceries and plastic containers.</p>
                                            <p>Glassware may be purchased at an additional fee.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="plan alt-price">
                            <div className="plan-inner">
                                <div className="entry-title">
                                    <h3>Quick Service</h3>
                                    <div className="price">$350</div>
                                </div>
                                <div className="entry-content">
                                    <ul>
                                        <li>
                                            <p>Three Meals with up to 4-6 servings of any selection.</p>
                                            <p>Fee includes groceries and plastic containers.</p>
                                            <p>Glassware may be purchased at an additional fee.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="plan">
                            <div className="plan-inner">
                                <div className="entry-title">
                                    <h3>Party</h3>
                                    <div className="price">$500<span>Minimum</span></div>
                                </div>
                                <div className="entry-content">
                                    <ul>
                                        <li>
                                            Call or email to discuss your event.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="plan alt-price">
                            <div className="plan-inner">
                                <div className="entry-title">
                                    <h3>Cooking Class</h3>
                                    <div className="price">$500<span>Minimum</span>
                                    </div>
                                </div>
                                <div className="entry-content">
                                    <ul>
                                        <li>
                                            Call or email to discuss the class you would like. I specialize in knife skills, sauces, Italian and French techniques, and special diets like keto.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;