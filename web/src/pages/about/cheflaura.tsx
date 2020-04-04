import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/cheflaura.css';

const About: React.FC = () => {
    return (
        <>
            <div id="cheflauracontent" className="row">
                <div className="col large-12">
                    <p>
                        Hello! Thank you for taking a few moments to read about me. My name is Laura Knight, and I grew up in a food-industry Italian family in
                        the small ethnic town of Windber, PA. I attended Penn State to study business in 1995, with the hope that my area of study could be used
                        <img id="cheflauraimg" src="/img/cheflaura.jpg" alt="Chef Laura" />
                        to propel me in the arena of food.    
                    </p>
                    <p>
                        For several years I worked as an accountant in the Washington DC area, then in December of 2008 I visited Bologna, Italy and learned the
                        techniques used in classic pasta making.  During the following January I became a culinary student 
                        at <a href="http://www.lacademie.com/" target="_blank" className="is-underline">L'Academie de Cuisine</a> where I learned classic French cooking 
                        methods.  Once I completed a 6 month restaurant externship program, I graduated from the academy in 
                        December of 2009. From the experiences that I gained I realized that I enjoyed being more of a caretaker and providing customer service with 
                        more of a personal touch. Therefore in August of 2009 A Knight’s Feast was born.
                    </p>
                    <p>
                        As your personal chef, my goal is to make your life easier by allowing you to come home to prepared meals that you have been craving. Not
                        only that, but I also enjoy planning <NavLink to="/menus/events" className="is-underline">themed events</NavLink> with special 
                        menus for friends and family gatherings, a romantic cozy evening, or even business functions. You can also count on me for fresh pet and baby 
                        foods. You have goals in life where you need time to complete them. Let me help by saving you that time and allowing you to eat the way you 
                        prefer as well.
                    </p>
                    <p>
                        Your family chef;<br />
                        Chef Laura
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;