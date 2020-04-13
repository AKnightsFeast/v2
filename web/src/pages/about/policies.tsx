import React from 'react';

const Policies: React.FC = () => {
    return (
        <section className="policies">
            <div className="policy">
                <h2>Payment Procedures</h2>
                <p>
                    Your scheduled cook date will be a priority and exclusively reserved, and must be secured with Chef Laura. 
                    The full service fee is payable in advance.
                </p>
            </div>

            <div className="policy">
                <h2>Allergy Policy</h2>
                <p>
                    Your home will need to be stocked with any equipment, containers and knives that I may need.  We will coordinate a grocery 
                    delivery, possibly through Peapod, Relay Foods, or any service you prefer.   Some equipment I need include a blender, cutting boards, 
                    rice cooker, mandolin, kitchen towels, paper towels and a ricer.  Average pots, pans and knives are fine.  You will purchase 
                    all groceries and containers. You will make the final choice on ingredients and make sure they do not include allergens you are 
                    sensitive to.  I will only charge the $375 service fee.
                </p>
            </div>

            <div className="policy">
                <h2>Travel Policy</h2>
                <p>
                    A travel fee of $.75 per mile for locations between 15 and 99 miles from Silver Spring, Md will be applied.  
                    For Locations over 100 miles from Silver Spring, Md a $250 travel fee will be applied to the total bill.
                </p>
            </div>

            <div className="policy">
                <h2>Cancellations</h2>
                <p>
                    Because your cook date is exclusively reserved, other clients will be required to choose another cook date.
                    Therefore a cancellation fee will be charged unless Chef Laura is notified one week (seven days) before your
                    scheduled cook date. The cancellation fee is 50% of the agreed upon service plan.  
                </p>
            </div>

            <div className="policy">
                <h2>Charity Event Policy</h2>
                <p>
                    Charity events will be considered based on availability.  I may donate my time, but all food cost and kitchen 
                    rental if you do not have one available must be reimbursed by the charity upon arrival at the event.  Kitchen 
                    rental is $40 per hour.  A normal home kitchen is fine.  A receipt or invoice can be given upon request.  A $300 
                    deposit is due at booking.  If the event is over 20 people a staffing fee of $100 per server is required.
                </p>
            </div>
        </section>
    );
};

export default Policies;