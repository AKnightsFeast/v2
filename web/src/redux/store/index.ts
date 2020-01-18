import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from '../epics';
import rootReducer from '../reducers';
import { initialState as monthlyMenuState } from '../../redux/reducers/monthlymenus';

import { ApplicationState } from '../../constants/types';

const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}