import React from 'react';

//import '../../assets/styles/testimonials.css';
//import '../styles/columns.css';

const Testimonials: React.FC = () => {
    return (
        <div className="testimonials">
            <div className="header" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <div className="">
                    See what others are saying about Chef Laura!
                </div>
            </div>

            <div className="strong-content strong-columns columns-3">
                <div className="testimonial">
                    <blockquote>
                        We were thrilled to have Laura come and prepare a wonderful dinner for our family celebration. From the very first contact
                        Laura showed sincere interest in our needs and suggested several excellent menus for the evening. The four course dinner of
                        appetizers, soup, a beautifully prepared main course, and our desserts exceeded all expectations. Laura's cooking skills were
                        matched by her personality in the kitchen and her service to our group. It was a special evening; much better than going to a
                        resturant and for our group of six adults and two children much less stressful and more economical. If you are looking for someone
                        to come prepare a wonderful dinner, I highly recommend Laura without reservation. We will be back!
                        <span>John - Mclean, Va.</span>
                    </blockquote>
                </div>

                <div className="testimonial">
                    <blockquote className="pink-color">
                        <p>Chef Laura has generously donated her time to our non-profit and displayed her big heart and wide array of culinary skills.</p>
                        She comes with a strong endorsement from <a href="http://www.HelpingOurBrothersandSisters.org" target="_blank" className="is-underline">Helping Our Brothers &amp; Sisters Non-Profit</a>.
                        <span>Dr. Marvin Carter, President</span>
                    </blockquote>
                </div>

                <div className="testimonial">
                    <blockquote>
                        Thanks for a great meal this past weekend out at graves mill. We all really enjoyed it. The food was delicious!!
                        <span>Heather</span>
                    </blockquote>
                </div>

                <div className="testimonial">
                    <blockquote className="pink-color">
                        What a wonderful time we had on Saturday!  Thank you so much for all the delicious dishes you created before our eyes, and for the instruction
                        that went with each dish.  We just finished the spinach gnocchi and froze the Italian sausage lasagna.  Tomorrow we will finish the veal osso bucco!
                        We plan to have a little tiramisu later tonight, and freeze the rest. Our friends loved the evening, the instruction, and the AWESOME food.
                        Thank you for your special effort to make non-alcoholic dishes for one of the guests.
                        <span>Elizabeth and Jim Twohhy</span>
                    </blockquote>
                </div>

                <div className="testimonial">
                    <blockquote>
                        Thank you SO much for dinner last night. It was, simply.... delicious. You helped make my Mom's birthday celebration so, so special. The food was
                        beyond yummy. I loved the extra surprise too--the figs were fantastic! Thank you again for everything. I will most definitely tell my friends
                        about A Knight's Feast!
                        <span>Kerry Willigan</span>
                    </blockquote>
                </div>

                <div className="testimonial">
                    <blockquote>
                        Thanks to you for all the delicious food you have cooked for me and my family for the past several months. It is always so 
                        wonderful to come home after a hard day at work and have your yummy and healthy meals to look forward to!
                        <span>Srimal W. Choi</span>
                    </blockquote>
                </div>

                <div className="testimonial">
                    <blockquote className="pink-color">
                        Laura, our evening was such a beautiful memory! Your culinary talents are beyond "wonderful"....in fact, your dinner was the 
                        best that both my husband and I have ever eaten and that says a lot since we travel the world and enjoy eating out about 5 
                        nights per week.  I wish you such continued success in building your business!
                        <span>Penny</span>
                    </blockquote>
                </div>

                <div className="testimonial">
                    <blockquote>
                        <p>
                            Laura, I wanted to take a moment and say thank you so much for the wonderful dinner that you cooked for me and my husband Jon on 
                            Valentine's Day.  Every single course was delicious, the filet mignon was phenomenal and my husband said and I quote "this is the 
                            best steak I have ever had, ever!"  And he is right, the chocolate merlot sauce was so delicious, we loved the parmesan mashed 
                            potatoes and, well we loved everything!  The deserts were yummy (creme brulee is my favorite) and the vegetables were just as I 
                            like them. You are fantastic chef and the way you cleaned up after you were done it was like you weren't even there (except our 
                            stomachs were full and we were completely satisfied).
                        </p>
                        <p>
                            So thank you again for making it one of the best Valentine's Day we have ever had and will never forget!  The massage and dinner 
                            combo was hit for us and we have to do that again!
                        </p>
                        Thank you!
                        <span>Linda Jaeger</span>
                    </blockquote>
                </div>

                <div className="testimonial">
                    <blockquote>
                        <p>
                            Just want to thank you for all of the scrumptious food you prepared
                            for us - you are such a great cook and we are enjoying it all :) the
                            stuffed portabellos were unbelievable :)
                        </p>
                        <p>
                            Take care and many Thx again!
                        </p>
                        <span>Peggy and Jimmy</span>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;