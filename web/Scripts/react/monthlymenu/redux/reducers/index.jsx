import { combineReducers } from "redux";

import {
    LOAD_DAYS,
    SHOW_DAYS,
    SHOW_MENU,
    LOAD_MENUS,
    SHOW_MENUS,
    LOAD_MENUS_ERR
} from 'Constants';

import { CreateReducer } from 'Utils';

export const ShowMenu = (selectedmenu) => ({
    type: SHOW_MENU,
    payload: {
        selectedmenu
    }
});

export const LoadMenusForDate = (selecteddate) => ({
    type: LOAD_MENUS,
    payload: {
        selecteddate
    }
});

export const ShowMenusForDate = (menus) => ({
    type: SHOW_MENUS,
    payload: {
        menus
    }
});

export const LoadMenusErr = () => ({
    type: LOAD_MENUS_ERR
});

export const LoadDaysForDate = (selectedmonth, selectedyear) => ({
    type: LOAD_DAYS,
    payload: {
        days: [],
        menus: [],
        selectedyear,
        selectedmonth
    }
});

export const ShowDaysForDate = (days, selecteddate) => ({
    type: SHOW_DAYS,
    payload: {
        days,
        selecteddate
    }
});

const monthlyMenuReducer = CreateReducer({ }, {
    [LOAD_DAYS]: (state, payload) => ({ ...state, ...payload }),
    [SHOW_DAYS]: (state, payload) => ({ ...state, ...payload }),
    [SHOW_MENU]: (state, payload) => ({ ...state, ...payload }),
    [LOAD_MENUS]: (state, payload) => ({ ...state, ...payload }),
    [SHOW_MENUS]: (state, payload) => ({ ...state, ...payload })
});

export default combineReducers({
    monthlymenu: monthlyMenuReducer
});