import { Observable } from "rxjs/Observable";
//import "rxjs/add/operator/map";
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
            console.log("Getting days for month...");

            let { selectedmonth, selectedyear } = action;

            // return Observable
            //         .from(GetTuesdays(selectedmonth, selectedyear))
            //         .mergeMap(days => {
            //             return Observable.of(ShowDaysForDate(days));
            //         });
            return Observable.of(ShowDaysForDate(GetTuesdays(selectedmonth, selectedyear)));
        })

const LoadMenusForDateEpic = (action$, store) =>
    action$
        .ofType(LOAD_MENUS)
        .switchMap(action => {
            let { date } = action;

            console.log("Getting menus for " + date + "...");

            // if the menus for the date have been loaded
            // pull them from the store...

            //... otherwise make a REST call

            return Observable.from(
                // put(WORKFLOWURL.PEER_COMPLETE + workflowProcessId, {
                //     reviewedById,
                //     peerReviewComplete: true
                // })
            )
            .mergeMap(response => {
                return Observable.of(
                    ShowMenusForDate()//,
                    //LoadReports({ tabView, page, pageSize })
                );
            })
            .catch(err => {
                console.error("Error Approving report tasking", err);

                return Observable.of(LoadMenusErr(err));
            });
        })
        .catch((error, caught) => {
            console.error("Error retrieving menus", error);
            return caught;
        });

export default combineEpics(
    // LoginUser,
    // LogoutUser,
    // CreateReportEpic,
    // LoadReportsEpic,
    // // SubmitReportEpic,
    // // LoadExaminerReportsListEpic,
    // LoadSupervisorReportsListEpic,
    // // ApproveReportEpic,
    // AssignReportEpic,
    // PeerCompleteReportEpic,
    // ReviewReportEpic,
    // SaveReportEpic,
    // GetReportEpic
    LoadDaysForDateEpic,
    LoadMenusForDateEpic
);