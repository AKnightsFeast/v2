import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/from";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { combineEpics } from "redux-observable";

import { GetTuesdays } from 'Utils';
import { LOAD_MENUS, LOAD_DAYS } from 'Constants';
import { ShowMenusForDate, ShowDaysForDate, LoadMenusErr } from 'Reducers';

const LoadDaysForDateEpic = (action$, store) =>
    action$
        .ofType(LOAD_DAYS)
        .switchMap(action => {
            const { selectedmonth, selectedyear } = action;
            const tuesdays = GetTuesdays(selectedmonth, selectedyear);

            return Observable.of(
                ShowDaysForDate(tuesdays, tuesdays[0], selectedyear, selectedmonth)
            );
        });

const LoadMenusForDateEpic = (action$, store) =>
    action$
        .ofType(LOAD_MENUS)
        .switchMap(action => {
            let { selecteddate } = action;

            console.log("Getting menus for " + selecteddate + "...");

            // // if the menus for the date have been loaded
            // // pull them from the store...

            // //... otherwise make a REST call

            // return Observable.from(
            //     // put(WORKFLOWURL.PEER_COMPLETE + workflowProcessId, {
            //     //     reviewedById,
            //     //     peerReviewComplete: true
            //     // })
            // )
            // .mergeMap(response => {
                return Observable.of(
                    ShowMenusForDate({})
                );
            // })
            // .catch(err => {
            //     console.error("Error loading menus", err);

            //     return Observable.of(LoadMenusErr(err));
            // });
        })
        .catch((error, caught) => {
            console.error("Error retrieving menus", error);
            return caught;
        });

export default combineEpics(
    LoadDaysForDateEpic,
    LoadMenusForDateEpic
);