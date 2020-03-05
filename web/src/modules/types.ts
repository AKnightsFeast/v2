import { StateType, ActionType } from 'typesafe-actions';

// Represents the months that a year has available monthly menus
export type ColumnedArrayItem<T> = {
    item: T,
    key: number
};        

export type MenuDates = {
    [key: number]: number[]
}    

export type MenuMonthProps = {
    Abbr: string,
    Name: string,
    IsActive: boolean
}    

export type MenuMonths = {
    [key: number]: MenuMonthProps
}    

export type MonthlyMenu = {
    IsLoading: boolean,
    SelectedMenu: string,
    MenuDates?: MenuDates,
    SelectedYear?: number,
    MenuMonths: MenuMonths
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