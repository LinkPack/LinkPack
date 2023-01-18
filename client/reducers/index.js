import { combineReducers } from 'redux';
import generatedLinkPackReducer from './generatedLinkPackReducer';
import linkPackReducer from './linkPackReducer';

const reducers = combineReducers({
  linkPack: linkPackReducer,
  generatedLinkPack: generatedLinkPackReducer
});

export default reducers;

