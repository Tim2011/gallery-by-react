import React from 'react';
import {Router, Route} from 'react-router';
import {Gallery} from 'modules/home';

const App = ({
  history,
}) => {
  return (
    <Router history={history}>
      <Route path="/" component={Gallery} />
    </Router>
  );
}

export default App;
