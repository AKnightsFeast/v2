import { createEpicMiddleware } from 'redux-observable';
import { compose, createStore, applyMiddleware } from 'redux';

import { RootAction, RootReducer } from '../modules/types';
import { InitialApplicationState } from '../modules/states';

import rootEpic from './epic';
import rootReducer from './reducer';
//import services from '../services';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootReducer>();

// configure middlewares
const middlewares = [epicMiddleware];

// compose enhancers
const enhancer = compose(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = InitialApplicationState;

// create store
const store = createStore(rootReducer, initialState, enhancer);

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