import React from 'react';

import { YearArray, MonthArray, ColumnizeArray, ColumnedArrayItem } from '../../utils';

const Monthly: React.FC = () => {
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
                        ColumnizeArray<string>(3, MonthArray).map((monthArr: ColumnedArrayItem<string>[], index: number) => (
                            <div key={ index } className="large-4 medium-12">
                            {
                                monthArr.map((month: ColumnedArrayItem<string>) => (
                                    <div key={ month.key }><a className="button is-outline is-smaller" href="#">{ month.item }</a></div>
                                ))
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