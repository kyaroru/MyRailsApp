import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cover from 'routes/Cover';
import Profile from 'routes/Profile';
import Apps from 'routes/Apps';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact component={Cover} />
          <Route path="/profile" component={Profile} />
          <Route path="/apps" component={Apps} />
        </div>
      </Router>
    );
  }
}

export default App;
