import { createAsyncAction } from 'typesafe-actions';

import { Message } from '../../modules/types';
import { SendMessageActions } from '../../modules/enums';

export const sendMessageAsync = createAsyncAction(
    SendMessageActions.SEND_MESSAGE,
    SendMessageActions.SEND_MESSAGE_OK,
    SendMessageActions.SEND_MESSAGE_ERR
)<Message, undefined, string>();
