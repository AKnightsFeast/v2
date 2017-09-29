import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';

import epic from 'Epics';
import reducer from 'Reducers';

const enhancer = compose(
  applyMiddleware(
      createEpicMiddleware(epic)
  )
)(createStore);

// remove window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() before deploying to test and prod
export default enhancer(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())