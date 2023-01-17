import { combineReducers } from 'redux';

import boilerplateReducer from './boilerplateReducer';

const reducers = combineReducers({
  store: boilerplateReducer,
});

export default reducers;

