import { StateType, ActionType } from 'typesafe-actions';

export type MenuMonth = {
    Abbr: string,
    Name: string,
    IsActive: boolean
}    

export type MonthlyMenu = {
    IsLoading: boolean,
    SelectedMenu: string,
    SelectedYear: number,
    MenuDates?: Map<number, number[]>,
    MenuMonths: Map<number, MenuMonth>
};    

export type ApplicationState = {
    MonthlyMenu: MonthlyMenu
};    

export type Store = StateType<typeof import('../redux/store').default>;

export type RootReducer = StateType<typeof import('../redux/reducer').default>;

export type RootAction = ActionType<typeof import('../redux/action').default>;

interface Types {
    RootAction: RootAction;
}