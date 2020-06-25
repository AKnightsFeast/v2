import axios from 'axios';

import { Assessment } from '../../modules/types';

export const submitAssessment = (assessment: Assessment) => axios.post('/assessment', { params: { assessment } });