import { from, of } from 'rxjs';
import { isActionOf, isOfType } from 'typesafe-actions';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

import { RootEpic } from '../../modules/types';

import { submitAssessmentAsync } from './actions';

export const SubmitAssessmentEpic: RootEpic = (action$, state$, { AssessmentServices }) =>
action$.pipe(
    filter(isActionOf(submitAssessmentAsync.request)),
    switchMap((action) =>
        from(AssessmentServices.submitAssessment(action.payload)).pipe(
            map(submitAssessmentAsync.success),
            catchError((message: string) => of(submitAssessmentAsync.failure(message)))
        )
    )
);