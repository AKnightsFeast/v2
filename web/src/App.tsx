import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Pages from './pages';

const history = createBrowserHistory();

//import logo from './logo.svg';
//import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Route component={Pages} />
      </Router>
    </div>
  );
}

export default App;