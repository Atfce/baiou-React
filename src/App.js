import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './pages/login/Login.js';

class App extends React.Component {

  render() {
      return(
          <Router>
              <Route path="/login" component={Login} />
          </Router>
      );
  }
}

export default App;
