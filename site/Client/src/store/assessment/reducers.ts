import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';

import { submitAssessmentAsync } from './actions';

export const IsSubmitting = createReducer(false as boolean)
    .handleAction([submitAssessmentAsync.request], (state : any, action : any) => true)
    .handleAction([submitAssessmentAsync.success, submitAssessmentAsync.failure], (state : any, action : any) => false);

const Assessment = combineReducers({ IsSubmitting });

export default Assessment;

export type AssessmentReducerState = ReturnType<typeof Assessment>;