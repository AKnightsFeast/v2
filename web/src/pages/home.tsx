import React from 'react';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-parallax';
//import { Transition } from 'react-transition-group';

import "../assets/styles/timeline.css";
import "../assets/styles/transition.css";

const calc = (o: number) => `translateY(${o * 0.1}px)`;

const Home: React.FC = () => {
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



            <section className="foodquote">
                <div className="overlay"></div>
                <Parallax className="parallax" bgImage="/img/bgfishstew.jpg" strength={700}>
                    <blockquote>
                        One cannot think well, love well, sleep well, if one has not dined well.
                        <span>Virginia Woolf</span>
                    </blockquote>
                </Parallax>
            </section>



            <section className="how-it-works">
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
                <Parallax className="parallax" bgImage="/img/bgsangria.jpg" strength={-100}>
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
                                    <div className="price">$475</div>
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
                                    <div className="price">$350</div>
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
           </section>
        </>
    );
}

export default Home;