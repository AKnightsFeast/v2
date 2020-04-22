import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../../modules/types';

import MenuSelector from './menuselector';
import MenuView from './menuview';

const Monthly: React.FC = () => {
    const menuDates = useSelector((state: ApplicationState) => state.MonthlyMenu.MenuDates);
    const selectedYear = useSelector((state: ApplicationState) => state.MonthlyMenu.SelectedYear);
    const selectedMonth = useSelector((state: ApplicationState) => state.MonthlyMenu.SelectedMonth);

    return (
        <section className="menu-monthly">
            <div className="content">
                <MenuSelector SelectedYear={selectedYear} MenuDates={menuDates} />
                <MenuView MenuYear={selectedYear} MenuMonth={selectedMonth} />
            </div>
        </section>
    );
};

export default Monthly;