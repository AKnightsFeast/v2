// Represents the months that a year has available monthly menus
import { Action } from 'redux';

import { Actions } from './enums';

export interface ColumnedArrayItem<T> {
    item: T,
    key: number
};    

interface IMenuDates {
    [key: number]: number[]
}

export interface IMenuMonths {
    [key: number]: IMenuMonthProps
}

export interface IMenuMonthProps {
    Abbr: string,
    Name: string,
    IsActive: boolean
}

export namespace ReducerActions {
    export namespace MonthlyMenu {
        export interface ILoadMenuDates extends Action {
            type: Actions.MonthlyMenuType.LOAD_MENU_DATES
        };

        export interface ILoadMenuDatesOk extends Action {
            type: Actions.MonthlyMenuType.LOAD_MENU_DATES_OK,
            MenuDates: ILoadMenuDates
        };

        export interface ILoadActiveMonths extends Action {
            type: Actions.MonthlyMenuType.LOAD_ACTIVE_MONTHS,
            SelectedYear: number
        };

        export interface ILoadMenu extends Action {
            type: Actions.MonthlyMenuType.LOAD_MENU,
            SelectedMenu: string
        }
    }
}

export type MonthlyMenuReducerActions = ReducerActions.MonthlyMenu.ILoadMenuDates | ReducerActions.MonthlyMenu.ILoadMenuDatesOk |
                                        ReducerActions.MonthlyMenu.ILoadActiveMonths | ReducerActions.MonthlyMenu.ILoadMenu;

export namespace ApplicationState {
    export interface IMonthlyMenu {
        MenuDates?: IMenuDates,
        SelectedMenu: string,
        SelectedYear?: number,
        MenuMonths: IMenuMonths
    };

    export interface IApplication {
        MonthlyMenu: IMonthlyMenu
    };
};