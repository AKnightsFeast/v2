import { MonthlyMenu, ApplicationState } from './types';

export const InitialMonthlyMenuState : MonthlyMenu = {
    IsLoading: false,
    SelectedMenu: '',
    MenuMonths: {
        [1]:  { Abbr: "Jan", Name: "January",   IsActive: false },
        [2]:  { Abbr: "Feb", Name: "February",  IsActive: false },
        [3]:  { Abbr: "Mar", Name: "March",     IsActive: false },
        [4]:  { Abbr: "Apr", Name: "April",     IsActive: false },
        [5]:  { Abbr: "May", Name: "May",       IsActive: false },
        [6]:  { Abbr: "Jun", Name: "June",      IsActive: false },
        [7]:  { Abbr: "Jul", Name: "July",      IsActive: false },
        [8]:  { Abbr: "Aug", Name: "August",    IsActive: false },
        [9]:  { Abbr: "Sep", Name: "September", IsActive: false },
        [10]: { Abbr: "Oct", Name: "October",   IsActive: false },
        [11]: { Abbr: "Nov", Name: "November",  IsActive: false },
        [12]: { Abbr: "Dec", Name: "December",  IsActive: false }
    }
};

export const InitialApplicationState : ApplicationState = {
    MonthlyMenu: InitialMonthlyMenuState
};