import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import { Transition } from 'react-transition-group';

import "../assets/styles/transition.css";
import "../assets/styles/navbar.css";
import "../assets/styles/site.css";

const Home: React.FC = () => {
    //const [showNav, setShowNav] = useState(false);

    return (
        <>
<nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
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
</nav>

            <div className="mx-auto max-w-screen-xl relative bg-white overflow-hidden">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <div className="pt-6 px-4 sm:px-6 lg:px-8"></div>

                    <div className="mt-5 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 sm:text-center lg:text-left">
                        <h2 className="tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">Question?</h2>
                        <p className="mb-5 mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Have you and your family become too reliant on carryout meals, mass-produced restaurant food, or boxed 
                            dinners with minimal nutritional value? Do you want to eat healthier but lack the time to plan, shop for 
                            and cook meals that are good for you?
                        </p>
                        <h2 className="tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">Answer!</h2>
                        <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            A Knight's Feast Personal Chef Service prepares your choice of meals - 
                            made fresh in your own kitchen - and packages them with easy-to-follow heating instructions. 
                            We create meals that meet your specific dietary and nutritional needs and appeal to your personal tastes.
                        </p>
                    </div>

                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>
                <div className="sm:px-6 lg:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/img/bgsquash.jpg" alt="" />
                </div>
            </div>
        </>
    );
}

export default Home;