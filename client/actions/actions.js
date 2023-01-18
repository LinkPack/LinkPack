import * as types from '../constants/actionTypes';

export const addEntryActionCreator = (label, link, keyId) => ({
  type: types.ADD_ENTRY,
  payload: {
    label,
    link,
    keyId
  }
});

export const generateLinkPackActionCreator = () => ({
  type: types.GENERATE_LINKPACK
});

export const getEntriesActionCreator = (receivedEntries) => ({
  type: types.GET_ENTRIES,
  payload: {
    receivedEntries
  }
})
export const deleteEntryActionCreator = (keyId) => ({
  type: types.DELETE_ENTRY,
  payload: keyId
});

