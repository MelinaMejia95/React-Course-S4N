import React from 'react';
import { Link } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { increaseLikes,
         decreaseLikes, 
         resetState,
         fetchCharacterSaga } from '../../actions/character';
import List from '../common/list';

class Dashboard extends React.Component {

  state = {};

  componentDidMount() {
    this.props.fetchCharacterSaga();
  }

  render () {
    const { character } = this.props;

    if (character.fetching) {
      return (<Dimmer active><Loader>Loading</Loader></Dimmer>)
    }

    return(
      <div>
        <h1>Dashboard</h1>
        <button onClick={this.props.increaseLikes}>Like to this character</button>
        <button onClick={this.props.decreaseLikes}>Unlike to this character</button>
        <button onClick={this.props.resetState}>Reset State</button>
        <Link to="/detail">Go to detail page</Link>
        <Link to="/state">Go to state page</Link>
        <h3>Like from redux {this.props.likes}</h3>
        <h1>Characters list</h1>
        {character.characters.length?(<List characters={character.characters}/>):(<h3>Empty List</h3>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  likes: state.character.likes,
  character: state.character
})

export default connect(mapStateToProps, {
  increaseLikes,
  decreaseLikes,
  resetState,
  fetchCharacterSaga
})(Dashboard);