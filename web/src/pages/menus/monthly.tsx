import React from 'react';
import { useSelector } from 'react-redux';

import { YearArray, ColumnizeArray } from '../../utils';
import { MenuMonth, ApplicationState } from '../../modules/types';

const Monthly: React.FC = () => {
    const menuMonths = useSelector((state: ApplicationState) => state.MonthlyMenu.MenuMonths);

    return (
        <div className="row row-main">
            <div className="col large-3 medium-12">
                <div>
                    {/* onChange={ props.OnDateChange } className={ "browser-default" } */}
                    <select defaultValue={ new Date().getFullYear().toString() }>
                    {
                        YearArray.map((year: number, index: number) => (
                            <option key={ index } value={ year }>{ year }</option>
                        ))
                    }
                    </select>
                </div>
                <div className="row">
                    {
                        ColumnizeArray<MenuMonth>(3, Array.from(menuMonths.values())).map((monthMap: Map<number, MenuMonth>, index: number) => (
                            <div key={ index } className="large-4 medium-12">
                            {
                                Array.from(monthMap.values()).map((month: MenuMonth, key: number) => {
                                    return (<div key={ key }><a className="button is-outline is-smaller" href="#">{ month.Abbr }</a></div>)
                                })
                            }
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="col large-9 medium-12">
                Select a year and month to see a menu...
            </div>
        </div>
    );
};

export default Monthly;