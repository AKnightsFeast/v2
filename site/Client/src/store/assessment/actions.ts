import { createAsyncAction } from 'typesafe-actions';

import { Assessment } from '../../modules/types';
import { AssessmentActions } from '../../modules/enums';

export const submitAssessmentAsync = createAsyncAction(
    AssessmentActions.SUBMIT_ASSESSMENT,
    AssessmentActions.SUBMIT_ASSESSMENT_OK,
    AssessmentActions.SUBMIT_ASSESSMENT_ERR
)<Assessment, undefined, string>();

/*
export const LoadAssessmentsAsync = createAsyncAction(
    AssessmentActions.LOAD_ASSESSMENTS,
    AssessmentActions.LOAD_ASSESSMENTS_OK,
    AssessmentActions.LOAD_ASSESSMENTS_ERR
)<number, Assessment[], string>();

export const LoadAssessmentAsync = createAsyncAction(
    AssessmentActions.LOAD_ASSESSMENT,
    AssessmentActions.LOAD_ASSESSMENT_OK,
    AssessmentActions.LOAD_ASSESSMENT_ERR
)<number, Assessment, string>();
*/