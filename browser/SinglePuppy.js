import React, { Component } from 'react';
import {connect} from 'react-redux';

class SinglePuppy extends Component {

  render () {
    const selectedPuppy = this.props.selectedPuppy;
    return (
      <div>
        <h2>{selectedPuppy.name}</h2>
        <div>
          <img src={selectedPuppy.image} />
        </div>
      </div>
    )
  }
}


const mapStateToProps = function(state, ownProps){

  return {
    selectedPuppy: state.selectedPuppy
  };
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePuppy);
