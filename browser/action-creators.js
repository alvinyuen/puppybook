// import axios from 'axios';

//constants
const SET_PUPPIES = 'SET_PUPPIES';
const SET_PUPPY = 'SET_PUPPY';

//action
export const setPuppies = (puppies) =>{
    return {
        type: SET_PUPPIES,
        puppies
    }
}

export const setPuppy = (puppy)=> {
    return {
        type: SET_PUPPY,
        puppy
    }
}


//async
export const getPuppiesFromServer = () =>
    (dispatch, nextState)=> {
        fetch('/api/puppies')
        .then((res)=> res.json())
        .then((puppies)=> dispatch(setPuppies(puppies)))
        .catch(err=> console.log(err));
    }


export const getPuppyInfoFromServer = (puppyId) =>
    (dispatch, nextState)=> {
        fetch(`/api/puppies/${puppyId}`)
        .then((res)=> res.json())
        .then((puppyInfo)=> dispatch(setPuppy(puppyInfo)))
        .catch(err => console.log(err));
    }








