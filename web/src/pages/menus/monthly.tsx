import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { YearArray } from '../../utils';
import { MenuMonth, ApplicationState } from '../../modules/types';

import { MonthlyMenuActions } from '../../modules/enums'

const Monthly: React.FC = () => {
    const menuMonths = useSelector((state: ApplicationState) => state.MonthlyMenu.MenuMonths);
    const selectedYear = useSelector((state: ApplicationState) => state.MonthlyMenu.SelectedYear);

    const dispatch = useDispatch();
    const getMonthsForYear = useCallback(() => dispatch({ type: MonthlyMenuActions.LOAD_ACTIVE_MONTHS }), [dispatch]);

    useEffect(() => {
        dispatch({ type: MonthlyMenuActions.LOAD_MENU_DATES })
    }, [dispatch]);

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
                            Array.from(menuMonths.values()).map((month: MenuMonth, key: number) => (
                                <div key={ key }><a className="button is-outline is-smaller" href="#">{ month.Abbr }</a></div>
                            ))
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