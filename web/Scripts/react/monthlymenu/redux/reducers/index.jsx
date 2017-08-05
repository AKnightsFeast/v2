import { combineReducers } from "redux";

import { GetTuesdays, GetDateKey, CreateReducer } from 'Utils';
import {
    LOAD_MENUS,
    LOAD_MENUS_ERR,
    SHOW_MENUS,
    LOAD_DAYS,
    SHOW_DAYS
} from 'Constants';

const years = [];
const todaysDate = new Date();
const todaysYear = todaysDate.getFullYear();
const todaysMonth = todaysDate.getMonth() + 1;

for (let year = 2013; year <= todaysYear; year++)
{
    years.push(year);
}

const initialState = {
    years,
    menus: [],
    selectedyear: todaysYear,
    selectedmonth: todaysMonth,
    date: new Date(todaysYear, todaysMonth, 1),
    days: {
        [GetDateKey(todaysMonth, todaysYear)]: GetTuesdays(todaysMonth, todaysYear)
    },
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};

export const LoadMenusForDate = (date) => ({
    type: LOAD_MENUS,
    date
});

export const ShowMenusForDate = (menus) => ({
    type: SHOW_MENUS,
    menus
});

export const LoadMenusErr = () => ({
    type: LOAD_MENUS_ERR
});

export const LoadDaysForDate = (selectedmonth, selectedyear) => ({
    type: LOAD_DAYS,
    selectedmonth,
    selectedyear
});

export const ShowDaysForDate = (days) => ({
    type: SHOW_DAYS,
    days
});

const monthlyMenuReducer = CreateReducer(initialState, {
    [LOAD_DAYS]: (state, payload) => {
        return {
            ...state,
            ...payload
        };
    },

    [SHOW_DAYS]: (state, payload) => {
        return {
            ...state,
            ...payload
        };
    },

    [LOAD_MENUS]: (state, payload) => {
        return {
            ...state,
            ...payload
        };
    },

    [SHOW_MENUS]: (state, payload) => {
        return {
            ...state,
            ...payload
        };
    }
});

export default combineReducers({
    //auth,
    //report,
    //reports,
    //examiner,
    //supervisor
    monthlymenu: monthlyMenuReducer
});