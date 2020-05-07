import { createAction, createAsyncAction } from 'typesafe-actions';

import { Month } from '../../../modules/types';
import { MonthlyMenuActions } from '../../../modules/enums';

export const setMenuYear = createAction(MonthlyMenuActions.SET_MENU_YEAR)<number>();
export const setMenuMonth = createAction(MonthlyMenuActions.SET_MENU_MONTH)<Month | null | undefined>();

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