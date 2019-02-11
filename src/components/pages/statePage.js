import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react';

class StatePage extends React.Component {

  state = { likes: 0 };

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  };

  render() {
    return (
      <Segment>
        <h1>Local State</h1>
        <Button onClick={this.addLike} color="red" content="Like" icon="heart" label={
          {basic: true, color: 'red', pointing: 'left', content: this.state.likes}
        }/>
      </Segment>
    );
  }
}

export default StatePage;
