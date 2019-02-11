import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

  state = {};

  render () {
    return(
      <div>
        <h1>Dashboard</h1>
        <Link to="/detail">Go to detail page</Link>
        <Link to="/state">Go to state page</Link>
        <h3>Like from redux {this.props.likes}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  likes: state.character.likes
})

export default connect(mapStateToProps)(Dashboard);