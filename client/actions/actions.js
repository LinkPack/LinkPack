import * as types from '../constants/actionTypes';

export const addEntryActionCreator = (label, link, keyId) => ({
  type: types.ADD_ENTRY,
  payload: {
    label,
    link,
    keyId
  }
});

export const deleteEntryActionCreator = (keyId) => ({
  type: types.DELETE_ENTRY,
  payload: keyId
});

