import { MutableRefObject } from 'react';
import { StateType, ActionType } from 'typesafe-actions';

export type Month = {
    Abbr: string,
    Name: string,
    Number: number
}    

export type MonthlyMenuState = {
    IsLoading: boolean,
    SelectedYear: number,
    MenuDates: Map<number, number[]>,
    SelectedMonth?: Month | null | undefined
};    

export type ApplicationState = {
    MonthlyMenu: MonthlyMenuState
};    

export type IMonthlyMenuSelectorProp = {
    SelectedYear: number,
    MenuDates: Map<number, number[]>
};

export type IMonthlyMenuMonthsProp = {
    MenuYear: MutableRefObject<number>,
    MenuDates: Map<number, number[]>
}

export type IMonthlyMenuViewProp = {
    MenuYear: number,
    MenuMonth?: Month | null | undefined
};

export type Store = StateType<typeof import('../redux/store').default>;

export type RootReducer = StateType<typeof import('../redux/reducer').default>;

export type RootAction = ActionType<typeof import('../redux/action').default>;

interface Types {
    RootAction: RootAction;
}