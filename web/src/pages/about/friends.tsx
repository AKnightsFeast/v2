import React from 'react';

const Friends: React.FC = () => {
    return (
        <section className="friends">
            <div className="header"><h2 className="mb-0">Some of Chef Laura's friends... check them out!</h2></div>

            <div className="content">
                <a href="http://www.joydeevy.com" title="Joy Deevy - Real Estate Agent" target="_blank">
                    <img src="/assets/img/friends/deevygrp.png" className="friend-img" />
                </a>
                <a className="friend-lnk" href="https://sweetcreationsbyangie.com" target="_blank">Sweet Creations by Angie</a>
                <a href="https://www.eatandsmilecatering.com" target="_blank">
                    <img src="/assets/img/friends/eatnsmile.jpg" className="friend-img" />
                </a>
            </div>
        </section>
    );
}

export default Friends;