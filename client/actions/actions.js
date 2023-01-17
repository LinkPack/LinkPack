import * as types from '../constants/actionTypes';

export const addEntryActionCreator = entry => ({
  type: types.ADD_ENTRY,
  payload: entry
});

export const generateLinkPackActionCreator = () => ({
  type: types.GENERATE_LINKPACK
});