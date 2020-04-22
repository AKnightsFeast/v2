import { StateType, ActionType } from 'typesafe-actions';

export type Month = {
    Abbr: string,
    Name: string
}    

export type MonthlyMenuState = {
    IsLoading: boolean,
    SelectedMenu: string,
    SelectedYear: number,
    MenuDates: Map<number, number[]>
};    

export type ApplicationState = {
    MonthlyMenu: MonthlyMenuState
};    

export type Store = StateType<typeof import('../redux/store').default>;

export type RootReducer = StateType<typeof import('../redux/reducer').default>;

export type RootAction = ActionType<typeof import('../redux/action').default>;

interface Types {
    RootAction: RootAction;
}