import React, { useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/home.css';
import '../assets/styles/timeline.css';

function RegisterFlatsomeScript() {
    const script = document.createElement("script");

    useLayoutEffect(() => {
        script.src = "/js/flatsome.js";
        script.async = true;

        document.body.appendChild(script);
    }, []);  // passing an empty array as second argument triggers the callback in useEffect only after
             // the initial render thus replicating `componentDidMount` lifecycle behaviour

    return null;
}
  
const Home: React.FC = () => {
    return (
        <>
            <div className="banner has-hover" id="mainBanner">
                <div className="banner-inner fill">
                    <div className="banner-bg fill">
                        <div className="bg fill bg-fill bg-loaded"></div>
                    </div>{/*<!-- bg-layers -->*/}

                    <div className="banner-layers container">
                        <div className="fill banner-link"></div>

                        <div className="text-box banner-layer x5 md-x5 lg-x0 y50 md-y50 lg-y50 res-text" id="bannerText">
                            <div className="text">
                                <div className="text-inner text-left">
                                    <h2 className="lead">Question?</h2>
                                    <p>
                                        Have you and your family become too reliant on carryout meals, mass-produced restaurant food, or boxed 
                                        dinners with minimal nutritional value? Do you want to eat healthier but lack the time to plan, shop for 
                                        and cook meals that are good for you?
                                    </p>
                                    <h2 className="lead pink-color">Answer!</h2>
                                    <p>
                                        A Knight's Feast Personal Chef Service prepares your choice of meals - 
                                        made fresh in your own kitchen - and packages them with easy-to-follow heating instructions. 
                                        We create meals that meet your specific dietary and nutritional needs and appeal to your personal tastes.
                                    </p>
                                    <p className="strong pink-color">
                                        What can I do for you?
                                    </p>
                                </div>
                            </div>{/*<!-- text-box-inner -->*/}

                        </div>{/*<!-- text-box -->*/}
                    </div>{/*<!-- .banner-layers -->*/}
                </div>{/*<!-- .banner-inner -->*/}
            </div>{/*<!-- .banner -->*/}



            <section className="section has-parallax" id="mainFoodQuote">
                <div className="bg section-bg fill bg-fill parallax-active bg-loaded" data-parallax-container=".section" data-parallax-background="" data-parallax="-4" style={{ height: "631.25px", transform: "translate3d(0px, -164.88px, 0px)", backfaceVisibility: "hidden" }}>
                    <div className="section-bg-overlay absolute fill"></div>
                </div>{/*<!-- .section-bg -->*/}

                <div className="section-content relative">
                    <div className="row row-large row-full-width align-middle row-padding">
                        <div className="col medium-12 small-12 large-12">
                            <blockquote>
                                One cannot think well, love well, sleep well, if one has not dined well.
                                <span>Virginia Woolf</span>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>{/*<!-- QA section -->*/}



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



            <section className="section has-parallax" id="mainChefQuote">
                <div className="bg section-bg fill bg-fill parallax-active bg-loaded" data-parallax-container=".section" data-parallax-background="" data-parallax="-4" style={{ height: "631.25px", transform: "translate3d(0px, -164.88px, 0px)", backfaceVisibility: "hidden" }}>
                    <div className="section-bg-overlay absolute fill"></div>
                </div>{/*<!-- .section-bg -->*/}

                <div className="section-content relative">
                    <div className="row row-large row-full-width align-middle row-padding">
                        <div className="col medium-12 small-12 large-12">
                            <blockquote>
                                A personal chef service is for anyone looking for a few nights off from worrying about what's for dinner.
                                <span>Chef Laura</span>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>{/*<!-- chef quote section -->*/}



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

            <RegisterFlatsomeScript />
        </>
    );
}

export default Home;