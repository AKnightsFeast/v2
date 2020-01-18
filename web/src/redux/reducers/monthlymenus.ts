import { CreateReducer } from '../../utils';
import { Actions } from '../../constants/enums';
import { ReducerActions, ApplicationState } from '../../constants/types';

export const initialState = {
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
} as ApplicationState.IMonthlyMenu

export default CreateReducer(initialState, {
    [Actions.MonthlyMenuType.LOAD_MENU_DATES]: (state: any): ReducerActions.MonthlyMenu.ILoadMenuDates => ({
      ...state
    }),
    [Actions.MonthlyMenuType.LOAD_MENU]: (state: any, payload: any): ReducerActions.MonthlyMenu.ILoadMenu => ({
      ...state,
      SelectedMenu: payload
    }),
    [Actions.MonthlyMenuType.LOAD_ACTIVE_MONTHS]: (state: any, payload: any): ReducerActions.MonthlyMenu.ILoadActiveMonths => ({
      ...state,
      SelectedYear: payload
    }),
    [Actions.MonthlyMenuType.LOAD_MENU_DATES_OK]: (state: any, payload: any) => ({
      ...state,
      MonthMenus: payload
    })
});