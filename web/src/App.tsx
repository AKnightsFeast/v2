import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Initialize from './components/initialize';
import Pages from './pages';

import './App.css';

const history = createBrowserHistory();

const App: React.FC = () => {
  Initialize();

  return (
    <div className="app">
      <Router history={history}>
        <Route component={Pages} />
      </Router>
    </div>
  );
}

export default App;