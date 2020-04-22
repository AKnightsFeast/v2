import { MonthlyMenuState, ApplicationState } from './types';

export const InitialMonthlyMenuState : MonthlyMenuState = {
    IsLoading: false,
    SelectedMenu: '',
    SelectedYear: new Date().getFullYear(),
    MenuDates: new Map<number, number[]>()
};

export const InitialApplicationState : ApplicationState = {
    MonthlyMenu: InitialMonthlyMenuState
};