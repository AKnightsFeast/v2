import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Months, YearArray } from '../../utils';
import { Month, ApplicationState } from '../../modules/types';

import { SetMenuYear } from '../../redux/menus/monthly/actions';

const Monthly: React.FC = () => {
    const dispatch = useDispatch();
    const menuDates = useSelector((state: ApplicationState) => state.MonthlyMenu.MenuDates);
    const selectedYear = useSelector((state: ApplicationState) => state.MonthlyMenu.SelectedYear);
    const getMonthsForYear = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => { dispatch(SetMenuYear(+(e.target.value))) }, [dispatch]);

    return (
        <section className="menu-monthly">
            <div className="content">
                <div className="selectors">
                    <div className="years">
                        <select value={ `${selectedYear}` } onChange={getMonthsForYear}>
                        {
                            YearArray.map((year: number, index: number) => (
                                <option key={ index } value={ year }>{ year }</option>
                            ))
                        }
                        </select>
                    </div>
                    <div className="months">
                        {
                            Array.from(Months.values()).map((month: Month, key: number) => {
                                let monthNo = key + 1;

                                if (menuDates && menuDates.size > 0) {
                                    let activeMonths = menuDates.get(selectedYear);

                                    if (activeMonths && activeMonths.includes(monthNo))
                                        return (<button key={ monthNo } className="month-active">{ month.Abbr }</button>);
                                }

                                return (<div key={ monthNo } className="month-inactive">{ month.Abbr }</div>);
                            })
                        }
                    </div>
                </div>

                <div className="menu">  
                    Select a year and month to see a menu...
                </div>
            </div>
        </section>
    );
};

export default Monthly;