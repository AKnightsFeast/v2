import { AnyAction } from 'redux';
import { Observable, of } from 'rxjs';
import { isOfType } from 'typesafe-actions';
import { filter, switchMap } from "rxjs/operators";
import { ActionsObservable } from "redux-observable";

import { Actions } from '../../constants/enums';
import { IMenuMonths, ReducerActions, MonthlyMenuReducerActions } from '../../constants/types';

export default {
    LoadMenuDatesEpic: (action$: ActionsObservable<MonthlyMenuReducerActions>, store: any): Observable<AnyAction> =>
        action$.pipe(
            filter(isOfType(Actions.MonthlyMenuType.LOAD_MENU_DATES)),
            switchMap((): Observable<AnyAction> => {
                return of({
                    type: Actions.MonthlyMenuType.LOAD_MENU_DATES_OK,
                    payload: {
                        2020: [1],
                        2019: [9-12],
                        2017: [1-12],
                        2016: [1],
                        2015: [4,5,7],
                        2014: [1-12],
                        2013: [1-6,8-12],
                        2012: [8-12]
                    }
                });
            })
        ),

    LoadActiveMonthsEpic: (action$: ActionsObservable<MonthlyMenuReducerActions>, store: any): Observable<AnyAction> =>
        action$.pipe(
            filter(isOfType(Actions.MonthlyMenuType.LOAD_ACTIVE_MONTHS)),
            switchMap((action: ReducerActions.MonthlyMenu.ILoadActiveMonths): Observable<AnyAction> => {
                const { SelectedYear } = action;
                const { MenuDates, MenuMonths } = store;

                let activeDates: number[];
                let activeMonths: IMenuMonths = {};

                if (MenuDates && (activeDates = MenuDates[SelectedYear])) {
                    activeDates.map((date: number) => {
                        activeMonths[date] = { Abbr: MenuMonths[date].Abbr, Name: MenuMonths[date].Name, IsActive: true };
                    })
                }

                // Set months active/inactive based on the selected year
                return of({
                    type: Actions.MonthlyMenuType.LOAD_ACTIVE_MONTHS_OK,
                    payload: activeMonths
                });
            })
        )
}

// export const LoadMenuEpic = (action$: any, store: any) =>
//     action$
//         .ofType(Actions.MonthlyMenuType.LOAD_MENU)
//         .switchMap((action: any) => {
//             const { selectedMonth, selectedYear } = action.payload;

//             return Observable.of(
//                 LoadMenu(tuesdays, tuesdays[0].date)
//             );
//         });
