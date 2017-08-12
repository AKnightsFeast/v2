import { combineReducers } from "redux";

import {
    LOAD_DAYS,
    SHOW_DAYS,
    LOAD_MENUS,
    SHOW_MENUS,
    LOAD_MENUS_ERR
} from 'Constants';

import { GetTuesdays, GetDateKey, CreateReducer } from 'Utils';

const todaysDate = new Date();
const todaysMonth = todaysDate.getMonth();
const todaysYear = todaysDate.getFullYear();

const initialState = {
    menus: [],
    selectedyear: todaysYear,
    selectedmonth: todaysMonth,
    days: GetTuesdays(todaysMonth, todaysYear),
    selecteddate: new Date(todaysYear, todaysMonth, todaysDate.getDate())
};

export const LoadMenusForDate = (selecteddate) => ({
    type: LOAD_MENUS,
    payload: { selecteddate }
});

export const ShowMenusForDate = (menus) => ({
    type: SHOW_MENUS,
    payload: { menus }
});

export const LoadMenusErr = () => ({
    type: LOAD_MENUS_ERR
});

export const LoadDaysForDate = (selectedmonth, selectedyear) => ({
    type: LOAD_DAYS,
    selectedyear,
    selectedmonth
});

export const ShowDaysForDate = (days, selecteddate, selectedyear, selectedmonth) => ({
    type: SHOW_DAYS,
    payload: {
        days,
        selecteddate,
        selectedyear,
        selectedmonth
    }
});

const monthlyMenuReducer = CreateReducer(initialState, {
    [LOAD_DAYS]: (state, payload) => ({ ...state, ...payload }),
    [SHOW_DAYS]: (state, payload) => ({ ...state, ...payload }),
    [LOAD_MENUS]: (state, payload) => ({ ...state, ...payload }),
    [SHOW_MENUS]: (state, payload) => ({ ...state, ...payload })
});

export default combineReducers({
    monthlymenu: monthlyMenuReducer
});