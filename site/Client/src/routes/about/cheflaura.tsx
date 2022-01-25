import React from 'react';
import { NavLink } from 'react-router-dom';

export const ChefLaura: React.FC = () => {
    return (
        <section className="cheflaura">
            <div className="poster">
                <div className="img">
                    <span className="overlay"></span>
                </div>
                <div className="slant">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            <div className="content">
                <div className="container mx-auto px-4">
                    <div className="relative mx-auto flex flex-col min-w-0 break-words bg-white w-5/6 mb-6 shadow-md rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-12/12 px-4 lg:order-1 flex justify-center">
                                    <div className="relative">
                                        <img
                                            alt="Chef Laura Knight"
                                            src={require("../../assets/img/about/cheflaura.jpg")}
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                            style={{ maxWidth: "150px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-32">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                                    Laura Knight
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                                    Silver Spring, Maryland
                                </div>
                                <div className="mb-2 text-gray-700 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                                    Personal Chef
                                </div>
                            </div>
                            <div className="mt-8 py-10 border-t border-gray-300 text-justify">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                            Hello! Thank you for taking a few moments to read about me. My name is Laura Knight, and I grew up in a food-industry Italian family in
                                            the small ethnic town of Windber, PA. I attended Penn State to study business in 1995, with the hope that my area of study could be used
                                            to propel me in the arena of food.    
                                        </p>
                                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                            For several years I worked as an accountant in the Washington DC area, then in December of 2008 I visited Bologna, Italy and learned the
                                            techniques used in classic pasta making.  During the following January I became a culinary student 
                                            at <a href="http://www.lacademie.com/" target="_blank">L'Academie de Cuisine</a> where I learned classic French cooking 
                                            methods.  Once I completed a 6 month restaurant externship program, I graduated from the academy in 
                                            December of 2009. From the experiences that I gained I realized that I enjoyed being more of a caretaker and providing customer service with 
                                            more of a personal touch. Therefore in August of 2009 A Knight’s Feast was born.
                                        </p>
                                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                            As your personal chef, my goal is to make your life easier by allowing you to come home to prepared meals that you have been craving. Not
                                            only that, but I also enjoy planning <NavLink to="/menus/events">themed events</NavLink> with special 
                                            menus for friends and family gatherings, a romantic cozy evening, or even business functions. You can also count on me for fresh pet and baby 
                                            foods. You have goals in life where you need time to complete them. Let me help by saving you that time and allowing you to eat the way you 
                                            prefer as well.
                                        </p>
                                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                            Your family chef;<br />
                                            Chef Laura
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}