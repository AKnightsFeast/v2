import React, { useCallback, useState, useRef, ChangeEvent } from 'react';

import { IMonthlyMenuSelectorProp } from '../../../modules/types';
import { YearArray } from '../../../utils';

import MenuMonths from './menumonths';

const MenuSelector: React.FC<IMonthlyMenuSelectorProp> = ({ SelectedYear, MenuDates }) => {
    const menuYearRef = useRef(SelectedYear);
    const [, refreshMenuYear] = useState();

    const getMonthsForYear = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        menuYearRef.current = +e.currentTarget.value;
        refreshMenuYear({});
    }, [menuYearRef.current]);

    return (
        <div className="selectors">
            <div className="years">
                <select value={ `${menuYearRef.current}` } onChange={ getMonthsForYear }>
                {
                    YearArray.map((year: number, index: number) => (
                        <option key={ index } value={ year }>{ year }</option>
                    ))
                }
                </select>
            </div>
            <MenuMonths MenuDates={MenuDates} MenuYear={menuYearRef} />
        </div>
    );
}

export default MenuSelector;