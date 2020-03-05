import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { InitialMonthlyMenuState } from "../../../modules/states";
//import { MonthlyMenu as MonthlyMenuEnum } from 'Enums/Actions';

import { LoadActiveMonthsAsync, LoadMenuDatesAsync, LoadMenuAsync } from './actions';

const initialState = InitialMonthlyMenuState;

export const IsLoading = createReducer(false as boolean)
    .handleAction([LoadActiveMonthsAsync.request, LoadMenuDatesAsync.request, LoadMenuAsync.request], (state : any, action : any) => true)
    .handleAction([LoadActiveMonthsAsync.success, LoadActiveMonthsAsync.failure,
                   LoadMenuDatesAsync.success, LoadMenuDatesAsync.failure,
                   LoadMenuAsync.success, LoadMenuAsync.failure], (state : any, action : any) => false);
    
export const MenuMonths = createReducer(initialState)
    .handleAction([LoadActiveMonthsAsync.success], (state : any, action : any) => [...state, action.payload]);
    //.handleAction(addTodo, (state : any, action : any) => [...state, action.payload])
    //.handleAction(removeTodo, (state : any, action : any) => state.filter(i => i.id !== action.payload));

export const MenuDates = createReducer(initialState)
    .handleAction([LoadMenuDatesAsync.success], (state : any, action : any) => [...state, action.payload]);

export const SelectedMenu = createReducer(initialState)
    .handleAction([LoadMenuAsync.success], (state : any, action : any) => [...state, action.payload]);

const MonthlyMenu = combineReducers({ IsLoading, MenuMonths, MenuDates, SelectedMenu });

export default MonthlyMenu;

export type MonthlyMenuReducerState = ReturnType<typeof MonthlyMenu>;





//import { CreateReducer } from '../../utils';
//import { MonthlyMenuType } from '../../constants/enums/actions';
//import { ReducerActions, ApplicationState } from '../../constants/types';

//export const initialState = {
//    SelectedMenu: '',
//    MenuMonths: {
//        [1]:  { Abbr: "Jan", Name: "January",   IsActive: false },
//        [2]:  { Abbr: "Feb", Name: "February",  IsActive: false },
//        [3]:  { Abbr: "Mar", Name: "March",     IsActive: false },
//        [4]:  { Abbr: "Apr", Name: "April",     IsActive: false },
//        [5]:  { Abbr: "May", Name: "May",       IsActive: false },
//        [6]:  { Abbr: "Jun", Name: "June",      IsActive: false },
//        [7]:  { Abbr: "Jul", Name: "July",      IsActive: false },
//        [8]:  { Abbr: "Aug", Name: "August",    IsActive: false },
//        [9]:  { Abbr: "Sep", Name: "September", IsActive: false },
//        [10]: { Abbr: "Oct", Name: "October",   IsActive: false },
//        [11]: { Abbr: "Nov", Name: "November",  IsActive: false },
//        [12]: { Abbr: "Dec", Name: "December",  IsActive: false }
//    }
//} as ApplicationState.IMonthlyMenu

//export default CreateReducer(initialState, {
//    [MonthlyMenuType.LOAD_MENU_DATES]: (state: any): ReducerActions.MonthlyMenu.ILoadMenuDates => ({
//      ...state
//    }),
//    [MonthlyMenuType.LOAD_MENU]: (state: any, payload: any): ReducerActions.MonthlyMenu.ILoadMenu => ({
//      ...state,
//      SelectedMenu: payload
//    }),
//    [MonthlyMenuType.LOAD_ACTIVE_MONTHS]: (state: any, payload: any): ReducerActions.MonthlyMenu.ILoadActiveMonths => ({
//      ...state,
//      SelectedYear: payload
//    }),
//    [MonthlyMenuType.LOAD_MENU_DATES_OK]: (state: any, payload: any) => ({
//      ...state,
//      MonthMenus: payload
//    })
//});