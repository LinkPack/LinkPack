import { combineReducers } from 'redux';
import linkPackReducer from './linkPackReducer';

const reducers = combineReducers({
  linkPack: linkPackReducer,
});

export default reducers;

