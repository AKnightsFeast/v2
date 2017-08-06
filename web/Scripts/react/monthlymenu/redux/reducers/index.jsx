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
    years: ((startYear, endYear) => {
        let years = [];

        for (let year = startYear; year <= endYear; year++) { years.push(year); }

        return years;
    })(2013, todaysYear),
    menus: [],
    selectedyear: todaysYear,
    selectedmonth: todaysMonth,
    date: new Date(todaysYear, todaysMonth, 1),
    days: GetTuesdays(todaysMonth, todaysYear),
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};

export const LoadMenusForDate = (date) => ({
    type: LOAD_MENUS,
    payload: { date }
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

export const ShowDaysForDate = (days, selectedmonth, selectedyear) => ({
    type: SHOW_DAYS,
    payload: {
        days,
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