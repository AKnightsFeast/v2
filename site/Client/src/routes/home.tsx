import React from 'react';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-parallax';
//import { Transition } from 'react-transition-group';

import "../assets/styles/pages/home/timeline.css";
//import "../assets/styles/transition.css";

const calc = (o: number) => `translateY(${o * 0.1}px)`;

export const Home: React.FC = () => {
    //const [showNav, setShowNav] = useState(false);

    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h2 className="text-pink-600">Question?</h2>
                    <p className="mb-6">
                        Have you and your family become too reliant on carryout meals, mass-produced restaurant food, or boxed
                        dinners with minimal nutritional value? Do you want to eat healthier but lack the time to plan, shop for
                        and cook meals that are good for you?
                    </p>
                    <h2 className="text-green-900">Answer!</h2>
                    <p>
                        A Knight's Feast Personal Chef Service prepares your choice of meals -
                        made fresh in your own kitchen - and packages them with easy-to-follow heating instructions.
                        We create meals that meet your specific dietary and nutritional needs and appeal to your personal tastes.
                    </p>
                </div>
                <div className="hero-bg"></div>
            </section>



{/*
*/}
            <section className="foodquote">
                <div className="overlay"></div>
                <Parallax className="parallax" bgImage="/assets/img/home/bgfishstew.jpg" strength={700}>
                    <blockquote>
                        One cannot think well, love well, sleep well, if one has not dined well.
                        <span>Virginia Woolf</span>
                    </blockquote>
                </Parallax>
            </section>




            <section className="how-it-works jagged-top">
                <h2>How It Works</h2>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon"><i className="material-icons">question_answer</i></div>
                        <div className="timeline-content">
                            <h2>Chat</h2>
                            <div className="timeline-content-container left">
                                <div className="text-left">
                                    <p>First I meet with you to discuss your dining wants and needs.</p>
                                    <ul className="pt-4 pl-10">
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
                        <div className="timeline-icon"><i className="material-icons">create</i></div>
                        <div className="timeline-content right">
                            <h2>Design</h2>
                            <div className="timeline-content-container right">
                                <p className="justify normal">Your menu is designed and sent to you for approval.</p>
                                <p className="justify normal">
                                    A list of suggestions will be sent you.  It must be approved within 48 hours of your cook date.  Feel free to make suggestions of what you’re craving!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon"><i className="material-icons">shopping_cart</i></div>
                        <div className="timeline-content">
                            <h2>Shop</h2>
                            <div className="timeline-content-container left">
                                <p className="justify normal">Your food is purchased fresh the day of your cook date.</p>
                                <p className="justify normal">
                                    Chef Laura will shop at the best local grocery stores and local farmers’ markets to ensure your meals are produced from the absolute freshest ingredients.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon"><i className="material-icons">whatshot</i></div>
                        <div className="timeline-content right">
                            <h2>Cook</h2>
                            <div className="timeline-content-container right">
                                <p className="justify normal">Your food will be prepared fresh by Chef Laura for delivery to your home.</p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon"><i className="material-icons">kitchen</i></div>
                        <div className="timeline-content">
                            <h2>Pack</h2>
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
            </section>



            <section className="chefquote">
                <div className="overlay"></div>
                <Parallax className="parallax" bgImage="/assets/img/home/bgsangria.jpg" strength={-100}>
                    <blockquote>
                        A personal chef service is for anyone looking for a few nights off from worrying about what's for dinner.
                        <span>Chef Laura</span>
                    </blockquote>
                </Parallax>
            </section>



            <section className="prices">
                <h2>Prices</h2>

                <div className="plans">
                    <div className="container">
                        <div className="plan">
                            <div className="plan-inner">
                                <div className="entry-title">
                                    <h3>Meal Service</h3>
                                    <div className="price">$575</div>
                                </div>
                                <ul className="entry-content">
                                    <li>5 meals with up to 4-6 servings of any selection.</li>
                                    <li>Fee includes groceries and plastic containers.</li>
                                    <li>Glassware may be purchased at an additional fee.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="plan">
                            <div className="plan-inner">
                                <div className="entry-title">
                                    <h3>Quick Service</h3>
                                    <div className="price">$425</div>
                                </div>
                                <ul className="entry-content">
                                    <li>3 Meals with up to 4-6 servings of any selection.</li>
                                    <li>Fee includes groceries and plastic containers.</li>
                                    <li>Glassware may be purchased at an additional fee.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="plan">
                            <div className="plan-inner">
                                <div className="entry-title">
                                    <h3>Party</h3>
                                    <div className="price">$500<span>Minimum</span></div>
                                </div>
                                <ul className="entry-content">
                                    <li>
                                        Call or email to discuss your event.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="plan">
                            <div className="plan-inner">
                                <div className="entry-title">
                                    <h3>Cooking Class</h3>
                                    <div className="price">$500<span>Minimum</span>
                                    </div>
                                </div>
                                <ul className="entry-content">
                                    <li>
                                        Call or email to discuss the class you would like. I specialize in knife skills, sauces, Italian and French techniques, and special diets like keto.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "1080px", transform: "translateZ(0px)" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>



            <section className="contactchef py-24">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">Send Chef Laura a message!</h4>

                                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">Complete this form and she will get back to you soon!</p>

                                    <div className="relative w-full mb-3 mt-8">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">Full Name</label>
                                        <input type="text" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Full Name" style={{ transition: "all 0.15s ease 0s" }} required={true} />
                                    </div>
                                    
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email</label>
                                        <input type="email" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Email" style={{ transition: "all 0.15s ease 0s" }} required={true} />
                                    </div>
                                    
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">Message</label>
                                        <textarea rows={4} cols={80} className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Type a message..." required={true}></textarea>
                                    </div>
                                    
                                    <div className="text-center mt-6">
                                        <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all 0.15s ease 0s" }}>Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}