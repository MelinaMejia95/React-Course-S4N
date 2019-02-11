import React from 'react';
import { Link } from 'react-router-dom';

class Detail extends React.Component {

  state = {};

  render () {
    return(
      <div>
        <h1>Detail Page</h1>
        <Link to="/">Go back to dashboard</Link>
      </div>
    );
  }
}

export default Detail;