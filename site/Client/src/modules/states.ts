import { MonthlyMenuState, ApplicationState } from './types';

export const InitialMonthlyMenuState : MonthlyMenuState = {
    IsLoading: false,
    SelectedMonth: null,
    SelectedYear: new Date().getFullYear(),
    MenuDates: new Map<number, number[]>()
};

export const InitialApplicationState : ApplicationState = {
    MonthlyMenu: InitialMonthlyMenuState
};