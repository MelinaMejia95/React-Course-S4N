import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Proptypes from 'prop-types';
import Dashboard from './components/pages/dashboardPage';
import DetailPage from './components/pages/detailPage';
import "semantic-ui-css/semantic.min.css"

const App = ({location}) => (
  <div className="ui container">
    <Switch>
      <Route location={location} path="/" exact component={Dashboard}/>
      <Route location={location} path="/detail" exact component={DetailPage}/>
    </Switch>
  </div>
);

App.prototype = {
  location : Proptypes.shape({
    pathname: Proptypes.string.isRequired
  }).isRequired
}

export default App;
