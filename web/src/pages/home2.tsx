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
            <header className="relative bg-white border-b-2 border-gray-300 text-gray-900">
                <div className="mx-auto flex justify-between">
                    <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Logo</div>

                    <ul className="flex">
                        {/* Menus Hoverable Link */}
                        <li className="hoverable hover:bg-blue-800 hover:text-white">
                            <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white">Menus</a>

                            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
                                <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                                    <div className="w-full text-white mb-8">
                                        <h2 className="font-bold text-2xl">Main Hero Message for the menu section</h2>
                                        <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                                    </div>

                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                                            </svg>

                                            <h3 className="font-bold text-xl text-white text-bold mb-2">Monthly</h3>
                                        </div>

                                        <p className="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>

                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                            </svg>

                                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>

                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
                                            </svg>

                                            <h3 className="font-bold text-xl text-white text-bold mb-2">Personal</h3>
                                        </div>

                                        <p className="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>

                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                            </svg>

                                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>

                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                                            </svg>

                                            <h3 className="font-bold text-xl text-white text-bold mb-2">Themed Events</h3>
                                        </div>

                                        <p className="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>

                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                            </svg>

                                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>

                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                                            </svg>

                                            <h3 className="font-bold text-xl text-white text-bold mb-2">Pack Your Freezer</h3>
                                        </div>

                                        <p className="text-gray-100 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>

                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                            </svg>

                                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        {/* About Hoverable Link */}
                        <li className="hoverable hover:bg-blue-800 hover:text-white">
                            <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white">About</a>

                            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
                                <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                                    <div className="w-full text-white mb-8">
                                        <h2 className="font-bold text-2xl">Main Hero Message for the menu section</h2>
                                        <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                                    </div>

                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                                            </svg>

                                            <h3 className="font-bold text-xl text-white text-bold mb-2">Policies</h3>
                                        </div>

                                        <p className="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>

                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                            </svg>

                                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>

                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
                                            </svg>

                                            <h3 className="font-bold text-xl text-white text-bold mb-2">Friends of Chef Laura</h3>
                                        </div>

                                        <p className="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>

                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                            </svg>

                                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>

                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 border-gray-600 sm:border-b-0 md:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                                            </svg>

                                            <h3 className="font-bold text-xl text-white text-bold mb-2">Chef Laura</h3>
                                        </div>

                                        <p className="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>

                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                                            </svg>

                                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        {/* Regular Link */}
                        <li className="hover:bg-blue-800 hover:text-white">
                            <a href="#" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Login</a>
                        </li>
                    </ul>
                </div>
            </header>




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