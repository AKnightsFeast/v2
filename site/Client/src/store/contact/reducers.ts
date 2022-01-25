import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { sendMessageAsync } from './actions';

export const IsSendingMessage = createReducer(false as boolean)
    .handleAction([sendMessageAsync.request], (state : any, action : any) => true)
    .handleAction([sendMessageAsync.success, sendMessageAsync.failure], (state : any, action : any) => false);

const Message = combineReducers({ IsSendingMessage });

export default Message;

export type SendMessageReducerState = ReturnType<typeof Message>;