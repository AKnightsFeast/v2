import { from, of } from 'rxjs';
import { isActionOf, isOfType } from 'typesafe-actions';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

import { RootEpic } from '../../modules/types';

import { sendMessageAsync } from './actions';

export const SendMessageEpic: RootEpic = (action$, state$, { ContactServices }) =>
action$.pipe(
    filter(isActionOf(sendMessageAsync.request)),
    switchMap((action) =>
        from(ContactServices.sendMessage(action.payload)).pipe(
            map(sendMessageAsync.success),
            catchError((message: string) => of(sendMessageAsync.failure(message)))
        )
    )
);