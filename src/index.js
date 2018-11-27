import css from './static/css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
// import Approuting from './components/Approuting';

ReactDOM.render(
  <Router>
      <App />
    </Router>
  ,document.querySelector('.main'))


