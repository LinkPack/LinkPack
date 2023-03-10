import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';


const store = configureStore({
  reducer: reducers
}
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;