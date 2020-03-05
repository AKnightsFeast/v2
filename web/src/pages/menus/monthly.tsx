import React from 'react';
import { useSelector } from 'react-redux';

import { ColumnedArrayItem, MenuMonths, ApplicationState } from '../../modules/types';
import { YearArray, ColumnizeArray } from '../../utils';

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
                        ColumnizeArray<MenuMonths>(3, Object.values(menuMonths)).map((monthArr: ColumnedArrayItem<MenuMonths>[], index: number) => (
                            <div key={ index } className="large-4 medium-12">
                            {
                                monthArr.map((month: ColumnedArrayItem<MenuMonths>) => {
                                    let { key } = month;
                                    let menuMonth = month.item[key];

                                    return (<div key={ key }><a className="button is-outline is-smaller" href="#">{ menuMonth.Abbr }</a></div>)
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