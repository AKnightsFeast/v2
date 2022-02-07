import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import { createBrowserHistory } from "history";

//import Initialize from './components/initialize';
import Routes from './routes';

import './App.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;

//const history = createBrowserHistory();

const App: React.FC = () => {
  //Initialize();

  return (
    <div className="app">
      <BrowserRouter basename={baseUrl}>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;