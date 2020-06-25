import { from, of } from 'rxjs';
import { isActionOf, isOfType } from 'typesafe-actions';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

import { RootEpic } from '../../modules/types';

import { SubmitAssessmentAsync } from './actions';

export const SubmitAssessmentEpic: RootEpic = (action$, state$, { AssessmentServices }) =>
action$.pipe(
    filter(isActionOf(SubmitAssessmentAsync.request)),
    switchMap((action) =>
        from(AssessmentServices.submitAssessment(action.payload)).pipe(
            map(SubmitAssessmentAsync.success),
            catchError((message: string) => of(SubmitAssessmentAsync.failure(message)))
        )
    )
);