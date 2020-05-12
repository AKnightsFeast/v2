import { from, of } from 'rxjs';
import { isActionOf, isOfType } from 'typesafe-actions';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

import { RootEpic } from '../../../modules/types';

import { LoadMenuDatesAsync, LoadMenuAsync } from './actions';
//import menuDates from '../../../assets/data/monthlymenudates';

export const LoadMenuDatesEpic: RootEpic = (action$, state$, { MenuServices }) =>
action$.pipe(
    filter(isActionOf(LoadMenuDatesAsync.request)),
    switchMap((action) => {
        let year = action.payload;
        let menuDates: Map<number, number[]> = state$.value.MonthlyMenu.MenuDates as Map<number, number[]>

        if (menuDates.has(year)) return of(LoadMenuDatesAsync.success(menuDates));
        
        return from(MenuServices.getMenuMonths(year)).pipe(
            map(response => {
                menuDates.set(year, response.data as number[]);
                return LoadMenuDatesAsync.success(menuDates);
                //LoadMenuDatesAsync.success(new Map<number, number[]>([[ year, response.data as number[] ]]))
            }),
            catchError(error => of(LoadMenuDatesAsync.failure(error)))
        );
    })
);

//export const LoadActiveMonthsEpic: Epic<RootAction, RootAction, RootReducer /*, Services*/> = (action$, state$) => //, { api }) =>
//action$.pipe(
//    filter(isActionOf(LoadActiveMonthsAsync.request)),
//    switchMap(() =>
//        from(api.todos.loadSnapshot()).pipe(
//            map(LoadActiveMonthsAsync.success),
//            catchError((message: string) => of(LoadActiveMonthsAsync.failure(message)))
//        )
//    )
//);

//export const LoadMenuEpic: Epic<RootAction, RootAction, RootReducer> = (action$, state$) => //, { api }) =>
//action$.pipe(
//    filter(isActionOf(LoadMenuAsync.request)),
//    //switchMap(() => )
//);


// import { AnyAction } from 'redux';
// import { Observable, of } from 'rxjs';
// import { isOfType } from 'typesafe-actions';
// import { filter, switchMap } from "rxjs/operators";
// import { Epic, ActionsObservable, StateObservable } from "redux-observable";

// import { RootAction } from "../actions/";
// import { IMenuMonths } from '../../constants/types';
// import { MonthlyMenuType } from '../../constants/enums/actions';

// export default {
//     LoadMenuDatesEpic: Epic (action$: ActionsObservable<MonthlyMenuReducerActions>, store: any): Observable<AnyAction> =>
//         action$.pipe(
//             filter(isOfType(MonthlyMenuType.LOAD_MENU_DATES)),
//             switchMap((): Observable<AnyAction> => {
//                 return of({
//                     type: MonthlyMenuType.LOAD_MENU_DATES_OK,
//                     payload: {
//                         2020: [1],
//                         2019: [9-12],
//                         2017: [1-12],
//                         2016: [1],
//                         2015: [4,5,7],
//                         2014: [1-12],
//                         2013: [1-6,8-12],
//                         2012: [8-12]
//                     }
//                 });
//             })
//         ),

//     LoadActiveMonthsEpic: (action$: ActionsObservable<MonthlyMenuReducerActions>, store: any): Observable<AnyAction> =>
//         action$.pipe(
//             filter(isOfType(MonthlyMenuType.LOAD_ACTIVE_MONTHS)),
//             switchMap((action: ReducerActions.MonthlyMenu.ILoadActiveMonths): Observable<AnyAction> => {
//                 const { SelectedYear } = action;
//                 const { MenuDates, MenuMonths } = store;

//                 let activeDates: number[];
//                 let activeMonths: IMenuMonths = {};

//                 if (MenuDates && (activeDates = MenuDates[SelectedYear])) {
//                     activeDates.map((date: number) => {
//                         activeMonths[date] = { Abbr: MenuMonths[date].Abbr, Name: MenuMonths[date].Name, IsActive: true };
//                     })
//                 }

//                 // Set months active/inactive based on the selected year
//                 return of({
//                     type: MonthlyMenuType.LOAD_ACTIVE_MONTHS_OK,
//                     payload: activeMonths
//                 });
//             })
//         )
// }

// // export const LoadMenuEpic = (action$: any, store: any) =>
// //     action$
// //         .ofType(Actions.MonthlyMenuType.LOAD_MENU)
// //         .switchMap((action: any) => {
// //             const { selectedMonth, selectedYear } = action.payload;

// //             return Observable.of(
// //                 LoadMenu(tuesdays, tuesdays[0].date)
// //             );
// //         });