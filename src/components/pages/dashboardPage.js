import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  state = {};

  render () {
    return(
      <div>
        <h1>Dashboard</h1>
        <Link to="/detail">Go to detail page</Link>
      </div>
    );
  }
}

export default Dashboard;