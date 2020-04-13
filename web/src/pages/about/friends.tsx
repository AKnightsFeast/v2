import React from 'react';

const Friends: React.FC = () => {
    return (
        <>

            <div id="friendsHeader" className="message-box relative dark" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <div className="message-box-bg-image fill"></div>
                <div className="message-box-bg-overlay fill pink-bg"></div>
                <div className="container relative">
                    <div className="inner last-reset">
                        <div className="row align-middle align-center">
                            <div className="col large-12">
                                <div className="col-inner text-left">
                                    Some of Chef Laura's friends... check them out!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="friendsContent" className="row">
                <div className="col large-4 med-12">
                    <a href="http://www.joydeevy.com" title="Joy Deevy - Real Estate Agent" target="_blank"><img src="/img/deevygrp.png" className="friend-img" /></a>
                </div>
                <div className="col large-4 med-12">
                    <a href="https://sweetcreationsbyangie.com" target="_blank" className="is-underline pink-color friend-lnk">Sweet Creations by Angie</a>
                </div>
                <div className="col large-4 med-12">
                    <a href="https://www.eatandsmilecatering.com" target="_blank"><img src="/img/eatnsmile.jpg" className="friend-img" /></a>
                </div>
            </div>
        </>
    );
}

export default Friends;