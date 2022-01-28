import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { sendMessageAsync } from './actions';

export const IsSendingMessage = createReducer(false as boolean)
    .handleAction([sendMessageAsync.request], (state : any, action : any) => true)
    .handleAction([sendMessageAsync.success, sendMessageAsync.failure], (state : any, action : any) => false);

const ContactMessage = combineReducers({ IsSendingMessage });

export default ContactMessage;

export type SendMessageReducerState = ReturnType<typeof ContactMessage>;