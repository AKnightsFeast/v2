import { createAction, createAsyncAction } from 'typesafe-actions';

import { MonthlyMenuActions } from '../../../modules/enums';

export const SetMenuYear = createAction(MonthlyMenuActions.SET_MENU_YEAR)<number>();

export const LoadMenuDatesAsync = createAsyncAction(
    MonthlyMenuActions.LOAD_MENU_DATES,
    MonthlyMenuActions.LOAD_MENU_DATES_OK,
    MonthlyMenuActions.LOAD_MENU_DATES_ERR
)<undefined, Map<number, number[]>, string>();

export const LoadMenuAsync = createAsyncAction(
    MonthlyMenuActions.LOAD_MENU,
    MonthlyMenuActions.LOAD_MENU_OK,
    MonthlyMenuActions.LOAD_MENU_ERR
)<undefined, undefined, string>();