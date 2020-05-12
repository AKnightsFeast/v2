import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { InitialMonthlyMenuState } from "../../../modules/states";

import { LoadMenuDatesAsync, LoadMenuAsync } from './actions';
import { MonthlyMenuActions } from '../../../modules/enums';

const initialState = InitialMonthlyMenuState;

export const IsLoading = createReducer(false as boolean)
    .handleAction([LoadMenuDatesAsync.request, LoadMenuAsync.request], (state : any, action : any) => true)
    .handleAction([LoadMenuDatesAsync.success, LoadMenuDatesAsync.failure,
                   LoadMenuAsync.success, LoadMenuAsync.failure], (state : any, action : any) => false);

export const SelectedYear = createReducer(initialState)
    .handleAction(MonthlyMenuActions.SET_MENU_YEAR, (state: any, action: any) => action.payload);

export const SelectedMonth = createReducer(initialState)
    .handleAction(MonthlyMenuActions.SET_MENU_MONTH, (state : any, action : any) => action.payload);

//export const MenuDates = createReducer(initialState)
//    .handleAction(MonthlyMenuActions.LOAD_MENU_DATES_OK, (state: any, action: any) => action.payload);
export const MenuDates = createReducer(initialState)
    .handleAction(LoadMenuDatesAsync.success, (state: any, action: any) => action.payload);

const MonthlyMenu = combineReducers({ IsLoading, SelectedYear, MenuDates, SelectedMonth });

export default MonthlyMenu;

export type MonthlyMenuReducerState = ReturnType<typeof MonthlyMenu>;