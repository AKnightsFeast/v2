import { createEpicMiddleware } from 'redux-observable';
import { compose, createStore, applyMiddleware } from 'redux';

import { RootAction, RootReducer, Services } from '../modules/types';
import { InitialApplicationState } from '../modules/states';

import rootEpic from './epic';
import rootReducer from './reducer';
import services from '../services';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootReducer, Services>({ dependencies: services });

// configure middlewares
const middlewares = [epicMiddleware];

// compose enhancers
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// rehydrate state on app start
const initialState = InitialApplicationState;

// create store
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;

// import { createStore, applyMiddleware } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';

// import rootEpic from '../epics';
// import rootReducer from '../reducers';
// import { initialState as monthlyMenuState } from '../../redux/reducers/monthlymenus';

// import { ApplicationState } from '../constants/types';

// const epicMiddleware = createEpicMiddleware();

// export const configureStore = () => {
//     const store = createStore(
//         rootReducer,
//         applyMiddleware(epicMiddleware)
//     );

//     epicMiddleware.run(rootEpic);

//     return store;
// }