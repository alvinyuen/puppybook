import React from 'react';
import  {connect}  from 'react-redux';
import {getPuppiesFromServer} from './action-creators';
import {Link} from 'react-router';

class AllPuppies extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
      let puppies = this.props.puppies;
    return(
      <div className="container flexbox-container">
        <div className="jumbotron">
          <div>
            <ul className="list-unstyled">
            {puppies.map((puppy,i)  => {
              return(
              <li key={i}><Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link></li>
              );
            })}
            </ul>
          </div>
        </div>
      </div>
    )
  }

}




const mapStateToProps = function(state, ownProps){
  console.log('state', state)
  return {
    puppies: state.puppies
  };
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    loadAllPuppies: (puppies)=> {dispatch(getPuppiesFromServer(puppies))}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies);



