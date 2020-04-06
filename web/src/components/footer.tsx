import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
<div className="container bg-grey-lighter p-8">
    <div className="sm:flex mb-4">
        <div className="sm:w-1/4 h-auto">
            <div className="text-orange mb-2">Menus</div>
            <ul className="list-reset leading-normal">
                <li className="hover:text-orange text-grey-darker"><NavLink to="/menus/monthly" className="is-underline">Monthly</NavLink></li>
                <li className="hover:text-orange text-grey-darker"><NavLink to="/menus/personal" className="is-underline">Personal</NavLink></li>
                <li className="hover:text-orange text-grey-darker"><NavLink to="/menus/events" className="is-underline">Themed Events</NavLink></li>
                <li className="hover:text-orange text-grey-darker"><NavLink to="/menus/freezer" className="is-underline">Pack Your Freezer</NavLink></li>
            </ul>
        </div>

        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
            <div className="text-blue mb-2">About</div>
            <ul className="list-reset leading-normal">
                <li className="hover:text-blue-light text-grey-darker"><NavLink to="/policies" className="is-underline">Policies</NavLink></li>
                <li className="hover:text-blue-light text-grey-darker"><NavLink to="/testimonials" className="is-underline">Testimonials</NavLink></li>
                <li className="hover:text-blue-light text-grey-darker"><NavLink to="/about/friends" className="is-underline">Friends</NavLink></li>
                <li className="hover:text-blue-light text-grey-darker"><NavLink to="/about/cheflaura" className="is-underline">Chef Laura</NavLink></li>
            </ul>
        </div>

        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
            <div className="text-green-dark mb-2">Follow Me</div>
            <div>
                <a href="https://www.facebook.com/AKnightsFeast/" target="_blank" rel="noopener noreferrer nofollow" className="icon plain facebook tooltip tooltipstered"><i className="icon-facebook"></i></a>
                <a href="https://www.instagram.com/aknightsfeast/" target="_blank" rel="noopener noreferrer nofollow" className="icon plain instagram tooltip tooltipstered"><i className="icon-instagram"></i></a>
                <a href="http://www.twitter.com/chefknight" target="_blank" rel="noopener noreferrer nofollow" className="icon plain twitter tooltip tooltipstered"><i className="icon-twitter"></i></a>
                <div id="cozymeal-chef-badge-1" title="Check me out on Cozymeal!"></div>
            </div>
        </div>

        <div className="sm:w-1/2 h-auto sm:mt-0 mt-8">
            <div className="text-red-light mb-2">Newsletter</div>
            <p className="text-grey-darker leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
            <div className="mt-4 flex">
                <input type="text" className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address" />
                <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
            </div>
        </div>
    </div>
</div>
);
}

export default Footer;