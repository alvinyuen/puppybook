import { combineReducers } from 'redux';


const hardcodedPuppy = {
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};



function setAllPuppiesReducer(state = [], action) {

    let newState = Object.assign({}, state);

    switch(action.type){
        case 'SET_PUPPIES':
            newState = action.puppies;
            break;
        default:
            return state;
    }
    return newState;
}


function selectPuppyreducer(state = {}, action) {

    let newState = Object.assign({}, state);

    switch(action.type){
        case 'SET_PUPPY':
            newState = action.puppy;
            break;
        default:
            return state;
    }
    return newState;
}

export default combineReducers({
    puppies: setAllPuppiesReducer,
    selectedPuppy: selectPuppyreducer
})