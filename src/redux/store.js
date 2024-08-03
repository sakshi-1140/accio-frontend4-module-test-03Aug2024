import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
import postsReducer from './reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
});

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(rootReducer, applyMiddleware(thunk)); // without using composeWithDevttools
export default store;
