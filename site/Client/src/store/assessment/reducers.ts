import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { SubmitAssessmentAsync } from './actions';

export const IsSubmitting = createReducer(false as boolean)
    .handleAction([SubmitAssessmentAsync.request], (state : any, action : any) => true)
    .handleAction([SubmitAssessmentAsync.success, SubmitAssessmentAsync.failure], (state : any, action : any) => false);

const Assessment = combineReducers({ IsSubmitting });

export default Assessment;

export type AssessmentReducerState = ReturnType<typeof Assessment>;