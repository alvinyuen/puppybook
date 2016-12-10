import { createStore, applyMiddleware} from 'redux';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//reducer
import rootReducer from './reducer';

export default createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, createLogger({collapsed: true})));

