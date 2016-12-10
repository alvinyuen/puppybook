'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import {getPuppiesFromServer, getPuppyInfoFromServer} from './action-creators';

import AllPuppiesContainer from './AllPuppiesContainer'
import SinglePuppyContainer from './SinglePuppyContainer';


const loadPuppies = ()=> {
  store.dispatch(getPuppiesFromServer());
}

const loadPuppyInfo = (nextState) => {
  store.dispatch(getPuppyInfoFromServer(nextState.params.id));
}


ReactDOM.render(
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" onEnter={loadPuppies}>
      <Route path="/puppies/:id" component={SinglePuppyContainer} onEnter={loadPuppyInfo}/>
      <IndexRoute component={AllPuppiesContainer} />
    </Route>
    <Route path="/puppies" component={AllPuppiesContainer}/>

  </Router>
</Provider>,
  document.getElementById('app')
);