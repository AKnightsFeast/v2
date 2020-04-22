import React from 'react';

import { IMonthlyMenuViewProp } from '../../../modules/types';


const MenuView: React.FC<IMonthlyMenuViewProp> = ({ MenuYear, MenuMonth }) => {
    return (
        <div className="menu">
            <div>
            {
                (MenuMonth !== undefined && MenuMonth !== null)
                    ? <>Menu for {MenuMonth.Name} {MenuYear}</>
                    : <>Select a year and month to see a menu...</>
            }
            </div>
        </div>
    );
}

export default MenuView;