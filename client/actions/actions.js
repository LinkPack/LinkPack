import * as types from '../constants/actionTypes';

export const addEntryActionCreator = (label, link, id) => ({
  type: types.ADD_ENTRY,
  payload: {
    label,
    link,
    id
  }
});

export const generateLinkPackActionCreator = () => ({
  type: types.GENERATE_LINKPACK
});