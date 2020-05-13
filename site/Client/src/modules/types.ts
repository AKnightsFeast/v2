import { Epic } from 'redux-observable';
import { CSSProperties, MutableRefObject } from 'react';
import { StateType, ActionType } from 'typesafe-actions';

import Services from '../services';
import { TweenFunctionEnum } from './enums';

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

export type ScrollToTopProp = {
    topPosition?: number,
    showUnder?: number, // show button under this position,
    easing?: TweenFunctionEnum,
    duration?: number, // seconds
    style?: CSSProperties
};

export type MenuNavProp = {
    activeMenuId: number
}

export type IndexedControlProp = {
    index: number
}

export type Services = typeof import ('../services').default;

export type Store = StateType<typeof import('../store').default>;

export type RootReducer = StateType<typeof import('../store/reducer').default>;

export type RootAction = ActionType<typeof import('../store/action').default>;

export type RootEpic = Epic<RootAction, RootAction, RootReducer, Services>;

//interface Types {
//    RootAction: RootAction;
//}