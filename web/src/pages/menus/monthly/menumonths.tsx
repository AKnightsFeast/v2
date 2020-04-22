import React, { useCallback, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import { Month, IMonthlyMenuMonthsProp } from '../../../modules/types';
import { Months, getMonthByNumber } from '../../../utils';
import { setMenuYear, setMenuMonth } from '../../../redux/menus/monthly/actions';

const MenuMonths: React.FC<IMonthlyMenuMonthsProp> = ({ MenuYear, MenuDates }) => {
    const dispatch = useDispatch();

    const setSelectedMonth = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const number = +e.currentTarget.value;
        const month = getMonthByNumber(number);
        
        dispatch(setMenuYear(MenuYear.current));
        dispatch(setMenuMonth(month));
    }, []);
    
    return (
        <div className="months">
        {
            Array.from(Months.entries()).map((entry: [number, Month]) => {
                let key = entry[0];
                let month = entry[1];

                if (MenuDates && MenuDates.size > 0) {
                    let activeMonths = MenuDates.get(MenuYear.current);

                    if (activeMonths && activeMonths.includes(key))
                        return (<button key={ key } value={ key } onClick={ setSelectedMonth } className="month-active">{ month.Abbr }</button>);
                }

                return (<div key={ key } className="month-inactive">{ month.Abbr }</div>);
            })
        }
        </div>
    );
}

export default MenuMonths;